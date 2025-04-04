import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";
import { Ref, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import createSearchParams from "@/utils/createSearchParams";

type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};

const useSWRPagination = ({
  url,
  params,
  pathData,
  config = {},
  isWithCreds,
}: {
  url: string | null;
  params?: { [x: string]: string | number | boolean | null };
  pathData?: string[];
  config?: SWRInfiniteConfiguration;
  isWithCreds?: boolean;
}): {
  mutate: any;
  triggerRef: Ref<HTMLDivElement>;
  isEnd: boolean;
  data: any;
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  meta: Meta | null;
} => {
  const { ref: triggerRef, inView } = useInView();
  const [isEnd, setIsEnd] = useState(false);
  const [meta, setMeta] = useState<Meta | null>(null);

  const fetcher = async (url: string) => {
    try {
      const { data } = await axios({
        method: "get",
        url,
        baseURL: process.env.NEXT_PUBLIC_BASEURL,
        headers: {
          Web: isWithCreds,
        },
        withCredentials: isWithCreds,
      });
      setMeta(data.meta);
      const newData = pathData
        ? pathData.reduce((obj, key) => obj[key], data.data)
        : data.data;
      if (
        newData.length <= 0 ||
        data.meta?.current_page === data.meta?.last_page
      ) {
        setIsEnd(true);
      }
      return newData;
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const getKey = (pageIndex: number, previousPageData: any[]) => {
    if (previousPageData && !previousPageData.length) {
      setIsEnd(true);
      return null; // reached the end
    }

    return url
      ? `${url}${createSearchParams({
          ...params,
          page: pageIndex + 1,
        })}`
      : null; // SWR key
  };

  const { data, error, isLoading, isValidating, size, setSize, mutate } =
    useSWRInfinite(getKey, fetcher, {
      initialSize: 1,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      ...config,
    });

  useEffect(() => {
    if (!inView || isLoading) {
      return;
    }
    setSize(size + 1);
  }, [inView]);

  return {
    mutate,
    triggerRef,
    isEnd,
    data: data,
    error,
    isLoading,
    isValidating,
    meta,
  };
};

export default useSWRPagination;

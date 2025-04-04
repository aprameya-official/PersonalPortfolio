import { IGoal } from "@/interfaces/IGoal";
import axios from "axios";
import useSWR from "swr";

const useGetGoal = ({
  username,
  id,
}: {
  username: string | null;
  id: number | null;
}) => {
  const KEY =
    username && id ? `/v1/profile/goals/${username}/goal_id/${id}` : null;

  const fetcher = (url: string) =>
    axios
      .get(process.env.NEXT_PUBLIC_BASEURL + url)
      .then((res) => res.data.data as IGoal);

  const { data, error, mutate } = useSWR(KEY, fetcher, {
    dedupingInterval: 3000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    mutate,
  };
};

export default useGetGoal;

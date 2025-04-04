import { IGoal } from "@/interfaces/IGoal";
import axios from "axios";
import useSWR from "swr";

const useGetGoalDonations = ({
  username,
  id,
}: {
  username: string | null;
  id: number | null;
}) => {
  const KEY =
    username && id
      ? `/v1/profile/goals/donations/${username}/goal_id/${id}`
      : null;

  const fetcher = (url: string) =>
    axios.get(url).then((res) => res.data.data as IGoal);

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

export default useGetGoalDonations;

import moment from "moment";

interface TimeAgoProps {
  dateStr: string;
}

const timeAgo = ({ dateStr }: TimeAgoProps) => {
  const inputDate = moment(dateStr);
  const currentDate = moment();
  const minutes = currentDate.diff(inputDate, "minutes");
  const hours = currentDate.diff(inputDate, "hours");
  const days = currentDate.diff(inputDate, "days");

  if (minutes < 1) return "Just now";
  if (hours < 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  if (days < 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (days < 365) return `${days} day${days > 1 ? "s" : ""} ago`;

  return inputDate.format("MMM D, YYYY [at] h:mm a");
};

export default timeAgo;

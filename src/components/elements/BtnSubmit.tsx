interface Props {
  title: string;
  className?: string;
  disabled: boolean;
}

const BtnSubmit = ({ title, className, disabled }: Props) => {
  return (
    <input
      type="submit"
      value={title}
      disabled={disabled}
      className={[
        "border font-medium py-1 px-4 text-gray-900 dark:text-gray-100 cursor-pointer block",
        disabled
          ? "bg-gray bg-opacity-20 border-gray opacity-50 cursor-progress"
          : "hover:bg-accent hover:bg-opacity-20 border-accent ",
        className,
      ].join(" ")}
    />
  );
};

export default BtnSubmit;

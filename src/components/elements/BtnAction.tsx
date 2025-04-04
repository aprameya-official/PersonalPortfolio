interface Props {
  title: string;
  className?: string;
  disabled: boolean;
  runAction: () => void;
}

const BtnAction = ({ title, className, disabled, runAction }: Props) => {
  return (
    <button
      type="button"
      onClick={runAction}
      disabled={disabled}
      className={[
        "border  font-medium py-1 px-4 text-white cursor-pointer",
        disabled
          ? "bg-gray bg-opacity-20 border-gray opacity-50 cursor-progress"
          : "hover:bg-accent hover:bg-opacity-20 border-accent ",
        className,
      ].join(" ")}
    >
      {title}
    </button>
  );
};

export default BtnAction;

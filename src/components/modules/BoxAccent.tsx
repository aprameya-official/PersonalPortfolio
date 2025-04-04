const BoxAccent = ({ className }: { className: string }) => {
  return <div className={["border border-gray ", className].join(" ")}></div>;
};

export default BoxAccent;

interface Props {
  alt: string;
  width: string;
  height: string;
  src: string;
  className?: string;
}
const Icon = ({ alt, width, height, src, className }: Props) => {
  return (
    <img
      alt={alt}
      width={width}
      height={height}
      title={alt}
      src={src}
      className={["select-none object-contain object-center", className].join(
        " "
      )}
    />
  );
};

export default Icon;

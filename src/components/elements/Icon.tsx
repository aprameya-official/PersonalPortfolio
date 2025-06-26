import { useState } from "react";

interface Props {
  alt: string;
  width: string;
  height: string;
  src: string;
  className?: string;
}
const Icon = ({ alt, width, height, src, className }: Props) => {
  const [isError, setIsError] = useState(false);
  return isError ? (
    <span
      style={{
        width,
        height,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FDBA3A",
        borderRadius: "50%",
        fontWeight: 700,
        color: "#222",
        fontSize: "1rem",
      }}
      className={className}
      title={alt}
    >
      AP
    </span>
  ) : (
    <img
      alt={alt}
      width={width}
      height={height}
      title={alt}
      src={src}
      className={["select-none object-contain object-center", className].join(" ")}
      onError={() => setIsError(true)}
    />
  );
};

export default Icon;

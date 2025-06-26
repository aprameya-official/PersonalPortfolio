/* eslint-disable @next/next/no-img-element */
"use client";
import { CSSProperties, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  draggable?: boolean;
  altImg?: string;
  width: string;
  height: string;
  style?: CSSProperties;
  title?: string;
}

const Img: React.FC<Props> = ({
  src,
  alt = "",
  className,
  draggable = false,
  altImg = "/icons/apram.png",
  width,
  height,
  style,
  title,
}) => {
  const [isError, setIsError] = useState(false);
  const onError = () => {
    setIsError(true);
  };

  return (
    <img
      title={title}
      draggable={draggable}
      onError={onError}
      alt={alt}
      width={width}
      height={height}
      style={style}
      src={isError || !src ? altImg : src}
      className={["select-none", className].join(" ")}
    />
  );
};

export default Img;

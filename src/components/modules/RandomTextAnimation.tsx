import React, { useEffect, useState } from "react";

interface RandomTextAnimationProps {
  speed?: number; // speed in milliseconds
  maxLength: number; // maximum length of the random text
}

const RandomTextAnimation: React.FC<RandomTextAnimationProps> = ({
  speed = 100,
  maxLength,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  const randomTextGenerator = (): string => {
    const randomLength = Math.floor(Math.random() * maxLength) + 1; // Random length between 1 and maxLength
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";

    for (let i = 0; i < randomLength; i++) {
      randomText += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomText;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(randomTextGenerator());
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [speed]);

  return <span>{displayedText}</span>;
};

export default RandomTextAnimation;

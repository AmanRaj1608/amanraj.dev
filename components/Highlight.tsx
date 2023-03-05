import React from "react";
import { RoughNotation } from "react-rough-notation";

type HighlightProps = {
  color: string;
  type: "underline" | "box" | "circle" | "highlight";
  textColor?: boolean;
  children: string;
};

const Highlight = ({ color, type, textColor, children }: HighlightProps) => {
  const animationDuration = Math.floor(40 * children.length);

  return (
    <RoughNotation
      type={type}
      multiline={true}
      padding={[0, 6]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      <span
        style={{ color: textColor ? "inherit" : "#000101", padding: "0 5px" }}
      >
        {children}
      </span>
    </RoughNotation>
  );
};

export default Highlight;

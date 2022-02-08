import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function ({ color, type, textColor, children }) {
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
      <span style={{ color: textColor ? "inherit" : "#000101", padding: "0 5px" }}>{children}</span>
    </RoughNotation>
  );
};

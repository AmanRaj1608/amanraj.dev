import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function ({ color, children }) {
  const animationDuration = Math.floor(40 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={false}
      padding={[0, 15]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      <span style={{ color: "#000101", padding: "0 5px"}}>{children}</span>
    </RoughNotation>
  );
};

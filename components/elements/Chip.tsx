import { CSSProperties } from "react";

interface ChipProps {
  children: JSX.Element;
  style: CSSProperties;
}

export function Chip({ children, style }: ChipProps) {
  return (
    <span
      style={{
        backgroundColor: "gray",
        color: "white",
        fontWeight: "bold",
        padding: "2px 4px",
        borderRadius: "2px",
        fontSize: "90%",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

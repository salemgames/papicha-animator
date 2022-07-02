import { CSSProperties } from "react";

export const toolContainer: CSSProperties = {
  marginBottom: 1,
  height: "10%",
  display: "block",
  overflow: "hidden",
  border: "solid 4px lightgray",
  borderRadius: "4px",
};

export const toolIconContainer: CSSProperties = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "green",
  left: 2,
  right: "80%",
  height: "inherit",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  padding: 0,
};

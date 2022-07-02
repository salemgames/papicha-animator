import { ReactNode } from "react";
import { toolContainer } from "./toolContainer.style";
import { toolIconContainer } from "./toolContainer.style";

interface ToolContainerProps {
  tool: ReactNode;
  icon: string;
}

export default function ToolContainer({ tool, icon }: ToolContainerProps) {
  return (
    <div style={toolContainer}>
      <div
        style={{
          ...toolIconContainer,
          backgroundImage: `url("${icon}.png")`,
        }}
      />
      {tool}
    </div>
  );
}

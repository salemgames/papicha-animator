import { toolMenuLayout } from "./toolMenu.style";
import ToolContainer from "../tools/toolContainer/ToolContainer";
import { menuStructure } from "../tools/menuStructure";

export default function ToolMenu() {
  return (
    <div style={toolMenuLayout}>
      {menuStructure.map((tool) => (
        <ToolContainer icon={tool.toolicon} tool={tool.toolComponent} />
      ))}
    </div>
  );
}

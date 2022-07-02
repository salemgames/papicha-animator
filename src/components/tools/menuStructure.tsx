import { ReactNode } from "react";
import FrameInput from "./FrameInput/FrameInput"; 
import FileExplorer from "./FileExplorer/FileExplorer"
interface MenuStructureProps {
  toolicon: string;
  toolComponent: ReactNode;
}

export const menuStructure: MenuStructureProps[] = [
  { toolicon: "animationFrameNumber", toolComponent: <FrameInput /> },
  { toolicon: "animationSpeedRate", toolComponent: <FrameInput /> },
  { toolicon: "animationSpeedRate", toolComponent: <FileExplorer /> },
];

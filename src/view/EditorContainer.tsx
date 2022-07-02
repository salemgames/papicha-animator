import { editorMainLayout } from "./EditorContainer.style";
import ToolMenu from "../components/ToolMenu/ToolMenu";
import RenderView from "../components/RenderView/RenderView";
import Header from "../components/Header/Header";
import FileModal from "../components/FileModal/FileModal";
import { MyContext } from "../App";
import { useContext } from "react";

export default function EditorContainer() {
  const value = useContext(MyContext);
  return (
    <>
      {value.animationSettings.isModalOpen && <FileModal />}
      <div style={editorMainLayout}>
        <ToolMenu />
        <RenderView />
        <Header />
      </div>
    </>
  );
}

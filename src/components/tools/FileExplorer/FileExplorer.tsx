import { fileExplorer } from "./FileExplorer.style";
import { useContext } from "react";
import { MyContext } from "../../../App";

export default function FileExplorer() {
  const { setAnimation, animationSettings } = useContext(MyContext);
  return (
    <>
      <div style={fileExplorer}>
        <button
          type="button"
          style={{ width: "100%", height: "100%" }}
          onClick={() =>
            setAnimation({ ...animationSettings, isModalOpen: true })
          }
        />
      </div>
    </>
  );
}

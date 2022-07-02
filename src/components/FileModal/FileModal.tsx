import { useContext } from "react";
import { MyContext } from "../../App";
import { fileModal } from "./fileModal.style";

export default function FileModal() {
  const { setAnimation, animationSettings } = useContext(MyContext);

  return (
    <div style={fileModal}>
      fdhfdhdfhdfhdfhdfh
      <button
        style={{
          position: "absolute",
          zIndex: 100,
          height: 100,
          width: 100,
          right: 2,
        }}
        type="button"
        onClick={() =>
          setAnimation({ ...animationSettings, isModalOpen: false })
        }
      />
    </div>
  );
}

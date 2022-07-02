import { frameInput } from "./frameInput.style";

export default function FrameInput() {
  return <input type="text" pattern="[0-9]*" style={frameInput} />;
}

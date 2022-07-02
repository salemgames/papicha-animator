import React, { useState } from "react";
import EditorContainer from "./view/EditorContainer";
import "./App.css";

interface AnimationSettings {
  animationTotalFrames: number;
  animationSpeedRate: number;
  isModalOpen: boolean;
}

interface MyContextProps {
  animationSettings: AnimationSettings;
  setAnimation: (animationSettings: AnimationSettings) => void;
}
export const MyContext = React.createContext<MyContextProps>(
  {} as MyContextProps
);

function App() {
  const [animationSettings, setAnimation] = useState<AnimationSettings>({
    animationTotalFrames: 0,
    animationSpeedRate: 0,
    isModalOpen: false,
  });

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          setAnimation,
          animationSettings,
        }}
      >
        <EditorContainer />
      </MyContext.Provider>
    </div>
  );
}

export default App;

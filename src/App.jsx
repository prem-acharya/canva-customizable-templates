import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import BackgroundSelector from "./components/BackgroundSelector";

function App() {
  const [background, setBackground] = useState("");
  const [fontSize, setFontSize] = useState(50);
  const [fontColor, setFontColor] = useState("#000000");

  return (
    <div className="flex">
      <div>
        <Toolbar setFontSize={setFontSize} setFontColor={setFontColor} />
        <hr />
        <BackgroundSelector setBackground={setBackground} />
      </div>
      <Canvas background={background} fontSize={fontSize} fontColor={fontColor} />
    </div>
  );
}

export default App;

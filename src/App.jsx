import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import BackgroundSelector from "./components/BackgroundSelector";

function App() {
  const [background, setBackground] = useState(""); // State to hold background image URL

  return (
    <div className="flex bg-gray-100">
      <div>
        <Toolbar />
        <hr />
        <BackgroundSelector setBackground={setBackground} />
      </div>
      <Canvas background={background} />
    </div>
  );
}

export default App;

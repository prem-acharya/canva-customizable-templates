import React, { useState } from 'react';
import bg2 from '../assets/bg2.png'

function Canvas({ background, text, fontSize, fontColor, fontFamily }) {
  const [zoom, setZoom] = useState(55);

  // console.log("Current font family:", fontFamily);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-no-repeat bg-center bg-cover w-[210mm] h-[297mm] shadow-xl" style={{ backgroundImage: `url(${background || bg2})`, transform: `scale(${zoom / 100})` }}>
        <div style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontFamily }} contentEditable={true} suppressContentEditableWarning={true}>
          Editing
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <input type="range" min="10" max="100" value={zoom} onChange={(e) => setZoom(e.target.value)} className="w-64" />
        <span className="ml-2">{zoom}%</span>
      </div>
    </div>
  );
}

export default Canvas;
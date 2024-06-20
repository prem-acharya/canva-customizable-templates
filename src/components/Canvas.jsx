import React, { useState } from 'react';

function Canvas({ background, text, fontSize, fontColor, fontFamily }) {
  const [zoom, setZoom] = useState(50);

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="bg-no-repeat bg-center bg-cover w-[210mm] h-[297mm] shadow-xl" style={{ backgroundImage: `url(${background})`, transform: `scale(${zoom / 100})` }}>
        <div style={{ fontSize, color: fontColor, fontFamily }} contentEditable={true} suppressContentEditableWarning={true}>
          {/* Editing */}
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
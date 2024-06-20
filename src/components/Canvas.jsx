import React from 'react';

function Canvas({ background, text, fontSize, fontColor, fontFamily }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-no-repeat bg-center bg-cover transform scale-60 w-[210mm] h-[297mm] shadow-xl" style={{ backgroundImage: `url(${background})` }}>
        <div style={{ fontSize, color: fontColor, fontFamily }} contentEditable={true} suppressContentEditableWarning={true}>
          {/* Editing */}
        </div>
      </div>
    </div>
  );
}

export default Canvas;
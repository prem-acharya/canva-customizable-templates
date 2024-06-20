import React, { useState } from 'react';

function Canvas() {
  const [text, setText] = useState('Editable Text');
  const [fontSize, setFontSize] = useState('16px');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');

  return (
    <div className="flex-1 p-4">
      <div style={{ fontSize, color: fontColor, fontFamily }} contentEditable={true} suppressContentEditableWarning={true}>
        {text}
      </div>
    </div>
  );
}

export default Canvas;
import React from 'react';
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import bg4 from '../assets/bg4.png'
import bg5 from '../assets/bg5.png'
import bg6 from '../assets/bg6.png'

function BackgroundSelector({ setBackground }) {
  const backgrounds = [
    { id: 1, img: bg1 },
    { id: 2, img: bg2 },
    { id: 3, img: bg3 },
    { id: 4, img: bg4 },
    { id: 5, img: bg5 },
    { id: 6, img: bg6 },
    { id: 7, img: bg1 },
    { id: 8, img: bg2 },
    { id: 9, img: bg3 },
    { id: 10, img: bg4 },
    { id: 11, img: bg5 },
    { id: 12, img: bg6 },
  ];

  return (
    <div className="p-4 grid grid-cols-2 gap-4 border-r overflow-auto max-h-[60vh]">
      {backgrounds.map(bg => (
        <div key={bg.id} className="cursor-pointer hover:scale-110 transition-transform duration-200">
          <img src={bg.img} alt={`Template ${bg.id}`} onClick={() => setBackground(bg.img)} className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
        </div>
      ))}
    </div>
  );
}

export default BackgroundSelector;
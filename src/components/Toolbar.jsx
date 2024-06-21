import React from 'react';

function Toolbar({ setFontSize, setFontColor, setFontFamily }) {
  return (
    <div className="w-64 p-4 border-r bg-white shadow-lg">
      <div className="mb-6">
        <label htmlFor="font-size" className="block text-sm font-medium text-gray-700">Font Size</label>
        <input type="number" id="font-size" className="mt-1 block w-full p-2 border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFontSize(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="font-color" className="block text-sm font-medium text-gray-700">Font Color</label>
        <input type="color" id="font-color" className="mt-1 block w-full h-10 border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
          onChange={(e) => setFontColor(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="font-family" className="block text-sm font-medium text-gray-700">Font Family</label>
        <select id="font-family" className="mt-1 block w-full p-2 border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          setFontFamily(e.target.value);
        }}>
          <option value="poppins">Poppins</option>
          <option value="monoton">Monoton</option>
          <option value="montserrat">Montserrat</option>
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
import React from 'react';

function Toolbar() {
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <div className="mb-4">
        <label htmlFor="font-size" className="block text-sm font-medium text-gray-700">Font Size</label>
        <input type="number" id="font-size" className="mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="font-color" className="block text-sm font-medium text-gray-700">Font Color</label>
        <input type="color" id="font-color" className="mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="font-family" className="block text-sm font-medium text-gray-700">Font Family</label>
        <select id="font-family" className="mt-1 block w-full">
          <option>Arial</option>
          <option>Times New Roman</option>
          <option>Helvetica</option>
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
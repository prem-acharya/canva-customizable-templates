import React from 'react';

function Toolbar() {
  return (
    <div className="w-64 p-4 border-r bg-white shadow-lg">
      <div className="mb-6">
        <label htmlFor="font-size" className="block text-sm font-medium text-gray-700">Font Size</label>
        <input type="number" id="font-size" className="mt-1 block w-full p-2 border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="font-color" className="block text-sm font-medium text-gray-700">Font Color</label>
        <input type="color" id="font-color" className="mt-1 block w-full p-2     border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="font-family" className="block text-sm font-medium text-gray-700">Font Family</label>
        <select id="font-family" className="mt-1 block w-full p-2 border rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Arial</option>
          <option>Times New Roman</option>
          <option>Helvetica</option>
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
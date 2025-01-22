import React, { useState } from 'react';
import Icons from "./index"

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  const iconList = Object.entries(Icons).map(([name, Icon]) => ({ name, Icon }));

  const filteredIcons = iconList.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyClick = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-xl font-medium mb-6">Below is a list of all the icons available in the Netist UI design system.</h1>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search In Netist UI Icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2">
        {filteredIcons.map(({ name, Icon }) => (
          <div
            key={name}
            onClick={() => handleCopyClick(name)}
            className="p-3 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-100 border border-gray-200 cursor-pointer transition-colors"
          >
            <div className="w-7.5 h-7.5 text-gray-800">
              <Icon width="30" height="30" />
            </div>
            <span className="text-xs text-gray-600 text-center">{name}</span>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-200 flex items-center gap-2 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <span className="text-green-400">✓</span>
        <span>Copied {copiedName}</span>
      </div>
    </div>
  );
}
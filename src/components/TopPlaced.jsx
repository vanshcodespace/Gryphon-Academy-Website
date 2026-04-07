import React from 'react';

export default function TopPlaced() {
  const gridItems = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="w-full h-[200vh] p-4">
      <div className="grid grid-cols-5 grid-rows-10 gap-2 w-full h-full">
        {gridItems.map((num) => (
          <div
            key={num}
            className={`
              relative border-[1px] border-black rounded-lg
              ${num === 1 ? "row-span-2" : ""}
              ${num === 2 ? "row-span-3" : ""}
              ${num === 3 ? "col-span-2 row-span-2" : ""}
              ${num === 4 ? "col-start-5 row-span-3" : ""}
              ${num === 5 ? "col-start-3 row-start-3 row-span-2" : ""}
              ${num === 6 ? "col-start-4 row-start-3 row-span-3" : ""}
              ${num === 7 ? "col-start-5 row-start-4 row-span-2" : ""}
              ${num === 8 ? "col-start-1 row-start-3 row-span-3" : ""}
              ${num === 9 ? "col-start-2 row-start-4 row-span-3" : ""}
              ${num === 10 ? "col-start-3 row-start-5 row-span-3" : ""}
              ${num === 11 ? "col-start-4 col-span-2 row-start-6 row-span-2" : ""}
              ${num === 12 ? "col-start-1 row-start-6 row-span-3" : ""}
              ${num === 13 ? "col-start-2 row-start-7 row-span-2" : ""}
              ${num === 14 ? "col-start-1 col-span-2 row-start-9 row-span-2" : ""}
              ${num === 15 ? "col-start-3 col-span-2 row-start-8 row-span-3" : ""}
              ${num === 16 ? "col-start-5 row-start-8 row-span-3" : ""}
            `}
          >
            {/* Corner icon in bottom right */}
            <div className="absolute bottom-1 right-1">
              <div className="w-2 h-2 border-r-[1px] border-b-[1px] border-black"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
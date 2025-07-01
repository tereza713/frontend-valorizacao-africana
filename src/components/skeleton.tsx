import React from "react";

export default function Skeleton() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex justify-center items-center gap-2">
        {[...Array(1)].map((value, index) => {
          return (
            <li
              key={index}
              className="bg-white p-4 rounded mb-4 text-gray-800 animate-pulse w-120"
            >
                <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
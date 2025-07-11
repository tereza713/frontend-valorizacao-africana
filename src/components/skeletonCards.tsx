import React from "react";

export default function SkeletonCards() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-wrap gap-2">
        {[...Array(4)].map((value, index) => {
          return (
            <li
              key={index}
              className="bg-white p-4 rounded mb-4 text-gray-800 animate-pulse w-60 h-5/6 flex flex-col items-center"
            >
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
import React from "react";

const AuthPattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md text-center">
        {/* Circle grid animation */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-16 h-16 rounded-full bg-blue-400 ${
                i % 2 === 0 ? "animate-pulse" : "animate-bounce"
              }`}
            />
          ))}
        </div>
        {/* Title and subtitle */}
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthPattern;

import React, { useState } from "react";

function NumberSelector({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleNumberSelect = (num) => {
    setSelectedNumber(num);
    setError("");
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex  gap-4">
        {numbers.map((num, index) => (
          <div
            key={index}
            role="button"
            aria-pressed={selectedNumber === num}
            onClick={() => handleNumberSelect(num)}
            className={`h-[72px] w-[72px] border border-black flex justify-center items-center text-2xl font-bold cursor-pointer ${
              selectedNumber === num ? "bg-black text-white" : ""
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      <p className="mt-4 text-lg font-bold">
        Selected Number: {selectedNumber ?? ""}
      </p>
    </div>
  );
}

export default NumberSelector;

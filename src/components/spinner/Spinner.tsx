import React from "react";

function Spinner() {
  return (
    <svg
      className="h-8 w-8 animate-spin overflow-hidden m-auto"
      viewBox="0 0 100 100"
    >
      <circle
        fill="none"
        strokeWidth="10"
        className="stroke-current"
        strokeDasharray="400"
        strokeDashoffset="220"
        cx="50"
        cy="50"
        r="40"
      />
    </svg>
  );
}

export default Spinner;

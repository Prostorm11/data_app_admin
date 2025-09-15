"use client";
import React from "react";
import "./customButton.css";

export default function CustomButton({ text, onClick, selected }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div className="CustomButton">
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: selected ? "var(--border-color)" : "transparent",
          color: selected ? "var(--background)" : "var(--text-color)",
          boxShadow: hover
            ? "0 4px 6px rgba(0, 0, 0, 0.1)"
            : "0 2px 4px rgba(0, 0, 0, 0.1)",
          transform: hover ? "scale(1.05)" : "scale(1)",
          transition: "all 0.2s ease-in-out",
          cursor: "pointer",
          flex: 1,
        }}
      >
        {text}
      </button>
    </div>
  );
}

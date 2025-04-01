import React, { useState } from "react";

export default function Slider() {
    const [value, setValue] = useState(50); // State to manage slider value
  return (
    <>
    
        <div className="slider-container">
          <input
            type="range"
            min="100"
            max="10000"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="slider"
          />
        </div>
    </>
  )
}

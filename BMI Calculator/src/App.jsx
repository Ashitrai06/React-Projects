import React, { useMemo, useState } from "react";

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const weightChange = (e) => {
    setWeight(e.target.value);
  };
  const heightChange = (e) => {
    setHeight(e.target.value);
  };
  const output = useMemo(()=>{
    const calculateHeight = height/100
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[height,weight])
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">{weight}kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="150"
          onChange={weightChange}
        />
        <p className="slider-output">{height}cm</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="250"
          onChange={heightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;

import React, { useState } from "react";
import DateTime from "./datetime";

const App = () => {
  const [temp,setTemp]= useState('');
  const [rain,setRain] = useState();
  const [speed,setSpeed] = useState();
  const [input,setInput] = useState();

  function search(){
    
  }

  return (
    <div>
      <div className="main">
        <div className="input">
          <input type="text" onChange={setInput(value)}/>
          <button onClick={search()}>Search</button>
        </div>
        <div>
          <DateTime/>
        </div>
        <div>
          <p>Temperature:{temp}</p>
          <p>Rain:{rain}</p>
          <p>Wind Speed:{speed}</p>
        </div>
      </div>
    </div>
  );
};

export default App;

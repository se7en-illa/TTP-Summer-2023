// Your code here!
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div id="container">
        <div id="navbar">Counter.js</div>
        <div id="counter">
          <h1>0</h1>
          <button>Increment</button>
        </div>
      </div>
    );
}
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<Counter />);
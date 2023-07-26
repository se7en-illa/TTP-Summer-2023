// Your code here!

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
    
    const [kittens, setKittens] = useState([]);

    return (
        <div>
          {kittens.map((kitten) => (
            <div>{kitten.name}</div>
          ))}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<h1>Hello World!</h1>);
root.render(<Counter />);

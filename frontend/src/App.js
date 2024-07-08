import React from "react";
import { useState,useEffect } from "react";
import Calculator from "./components/Calculator";
import "./components/Calculator.css"

function App() {
  return (
    <div>
        <Counter />
        <div><Calculator /></div>
        
    </div>
  )
}

export default App;



function Counter() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        // This effect will run whenever the 'count' state changes
        console.log("Count has changed!");
      }, [count]);
    
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          next
        </button>
        <button onClick={() => setCount(count - 1)}>
          prev
        </button>
        <button onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    );
  }
  

  
// {isLoggedIn ? <Home /> : <Login />}
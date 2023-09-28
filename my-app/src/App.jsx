import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // my code to run
    console.log("The count is:", count);
    document.title = `The count is ${count} 👍`;

    // Optional return function
    return () => {
      console.log("Cleaning up the useEffect, timeouts can be overlapping or so, this stops after runing and resets useeffect");
    };
  }, [count]); // Dependency arrray, useEffect will console when count is changed
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  )
}

export default App

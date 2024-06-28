import { useState } from "react";
import "../stylesheet/App.css"

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : count);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="main">
      <h1>Counter App</h1>
      <div className="container">
        <h2>{count}</h2>

        {count % 2 === 0 ? <p>Value is Even</p> : <p>Value is Odd</p>}

        <div className="btn">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

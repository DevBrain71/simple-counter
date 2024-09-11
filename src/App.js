import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  // const currentDate = count + date.getDate();
  const stance = count > 0 ? "from today" : "ago was";

  return (
    <>
      <div className="container">
        <button onClick={() => setStep((s) => s - 1)}>&minus;</button>
        <p className="btn">Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="container">
        <button onClick={() => setCount((c) => c - 1 * step)}>&minus;</button>
        <p className="btn">Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1 * step)}>+</button>
      </div>
      <p className="pTag">
        {count} days {stance} is {date.toDateString()}
      </p>
    </>
  );
}

export default App;

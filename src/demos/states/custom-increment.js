import { useState } from "react";

function IncrementButton() {
  const [count, setCount] = useState(0);
  const buttonIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const buttonDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <div>
        <h5>Count is {count}</h5>
        <button onClick={buttonDecrement}>Decrease</button>

        <button onClick={buttonIncrement}>Increase</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );

  //   const [message, setMessage] = useState("");
  //   const [increase, setIncrement] = useState(1);

  //   const onMessageChange = (e) => setMessage(e.target.value);
  //   const clickIncrement = (event) => {
  //     const newIncrement = parseFloat(event.target.value);
  //     setIncrement(newIncrement);
  //   };

  //   const addition = () =>{

  //   };

  //   return (
  //     <div>
  //       <div>
  //         <label htmlFor="message">The current value is:</label>
  //         <input id="message" />
  //       </div>
  //       <div>
  //         <label htmlFor="message">The current increment is:</label>
  //         <input id="message" />
  //       </div>

  //       <button onClick={}>Increase</button>

  //       <div>
  //         <label htmlFor="increment">Increment</label>
  //         <input id="increase" type="range" min="0.1" max="10" step="0.1" />
  //       </div>
  //     </div>
  //   );
}

export default IncrementButton;

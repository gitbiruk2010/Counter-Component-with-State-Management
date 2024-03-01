// import react and the usestate hook
import React, { useState } from 'react';

// define the counter component
function Counter() {
  // initialize state for count
  const [count, setCount] = useState(0);

  // function to increment count by 1
  const increment = () => setCount(count + 1);
  // function to increment count by 1 after a 2-second delay
  const incrementAfterDelay = () => setTimeout(() => setCount(count + 1), 2000);
  // function to demonstrate batching with two immediate setCount calls
  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  // function to correctly increment count by 2 using the function form of setCount
  const correctIncrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  // function to reset count to 0
  const resetCount = () => setCount(0);

  // render the component UI
  return (
    <div>
      <h3>A Counter Component with State Management</h3>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
      <button onClick={resetCount} style={{ backgroundColor: 'red', color: 'white' }}>reset</button>
    </div>
  );
}

// export the counter component
export default Counter;

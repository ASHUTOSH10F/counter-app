import React from 'react'
import { useState } from 'react'
import Header1 from './header/header1';
export default function Counter() {

    const [count , setCounter] = useState(0)
    // Function to increment the count
  const increment = () => {
    setCounter(count + 1);
  };

//   Function to Decrement the count
const decrement = () =>
{
    setCounter(count-1);
}

  return (
    <>
    <Header1/>

    <div>
       <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    </div>
    </>
   
  )
}

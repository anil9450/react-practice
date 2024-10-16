"use client";
import React, { useState } from "react";
import { setTimeout } from "timers";

const Increment = () => {
  const [count, setCount] = useState(0);

  function handleClickIncrement() {
    setCount(count + 1);
  }

  function handleClickDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={handleClickIncrement}
        className="border border-red-400 p-1"
      >
        increment by +1
      </button>
      <button
        onClick={handleClickDecrement}
        className="border border-red-400 p-1"
      >
        decrement by 1
      </button>
    </div>
  );
};

export default Increment;

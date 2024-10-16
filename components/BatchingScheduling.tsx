"use client";
import React, { useState } from "react";

const BatchingScheduling = () => {
  const [count, setCount] = useState(0); // inside useState(initialState); & count will be zero.
  const [number, setNumber] = useState(21); // count will work like a memory & setCount is used to set value of count according to requirement
  const [prevvalue, setPrevious] = useState(0);
  function handleClick() {
    setCount(count + 1); // Scheduling & count will be 0
    setCount(count + 1); // Schedulng & count will be 0
    setCount(count + 1); // Scheduling & count will be 0
    setCount(count + 1); // first make the group of all set counts & execute it at a point of time is called (Batching)
    setCount(count + 1); // if all are same it shows output will be according to last set count only
    setCount(count + 3); // last will be current state & output will be according to this
    setCount(count + 1); // now this is the last so it will become current state and count will be 1 as output
    setNumber(number + 1); // number is only one so it is executed acccording to normal logic of batching
    setPrevious((prevvalue) => prevvalue + 1); // prevvalue taking both prevvalue & setPrevious updating according to what you are adding
    setPrevious((prevvalue) => prevvalue + 1); // batching also happening here taking all prevvalue for same type
  }
  return (
    <div className="text-center">
      <h1 className="bg-slate-200 font-bold text-4xl">
        Batching & Scheduling In React
      </h1>
      <h1>{count}</h1>
      <button onClick={handleClick} className="bg-black text-white p-1">
        (+++++)
      </button>
      <h1>{number}</h1>
      <button onClick={handleClick} className="bg-black text-white p-1">
        Number
      </button>
      <h1>{prevvalue}</h1>
      <button onClick={handleClick} className="bg-black text-white p-1">
        Previous Number
      </button>
    </div>
  );
};

export default BatchingScheduling;

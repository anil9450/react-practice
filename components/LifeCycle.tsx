"use client";
import React, { useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-4xl mt-10 font-bold">Life Cycle Method</h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-black p-1 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default LifeCycle;
// Life Cycle Method
// 1 - Mounting (always happens) , 2 - Updation (depends upon requirement) , 3 - UnMounting
// Mounting - when (component) element first time enters in react dom & output shown we can say my compenent is in mounting phase.
// mounting - a particular in which components enters in react dom & out that particular time is called mounting lifecycle of component.
// Updation - when element are visible in dom so visible in output then when perform action there will be a change in element and component re-render in the dom and output appear we can say our element is in updationd phase or updated.
// when we refresh the page our component go in the mounting phase every time untill you do something it will still in mounting & output shown.
// when remove from the DOM that phase is called unmounting lifecycle.
// when we write render our component in App.js (react) & page (nextjs) then we can say component is mounted.
// after refreshing my page or when my page render first time util & unless changes not done we can say my component is in still mounting phase.
// when our component in life cycle method it rerender a method
// in react functional component there are a only one method that is called useEffect

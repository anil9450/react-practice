"use client";
import React, { useState } from "react";

const Form = () => {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [condition, setCondition] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setCondition(true);
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center">React Form</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          className="bg-gray-300 text-black rounded"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <div className="mt-2">
          <label>Passward</label>
          <input
            type="password"
            className="bg-gray-300 text-black rounded"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />{" "}
          <br />
        </div>
        <button type="submit" className="border border-black p-1 mt-2 rounded">
          Login
        </button>
        {condition && (
          <h1>
            My Name is : {username} & My Passward is : {pass}
          </h1>
        )}
      </form>
    </div>
  );
};

export default Form;
// controlled component & uncontrolled component (useRef) come into picture from here
// we will study here only controlled component.when we use state to controll the values of input field.
// onchange event triggers when change in input field (updation phase)
// state is value & value is state (called two way data binding)

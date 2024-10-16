"use client";
import React, { useState } from "react";

const Form1 = () => {
  const [data, setData] = useState({
    name: "",
    pass: "",
  });
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center">
        React Form with Objects
      </h1>
      <form className="text-center">
        <label>UserName</label>
        <input
          type="text"
          className="bg-gray-300 text-black rounded"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />{" "}
        <br />
        <div className="mt-2">
          <label>Passward</label>
          <input
            type="password"
            className="bg-gray-300 text-black rounded"
            value={data.pass}
            onChange={(e) =>
              setData((prev) => ({ ...prev, pass: e.target.value }))
            }
          />{" "}
          <br />
        </div>
        <button type="submit" className="border border-black p-1 mt-2 rounded">
          Login
        </button>
        <h1>
          My Name is : {data.name} & My Passward is : {data.pass}
        </h1>
      </form>
    </div>
  );
};

export default Form1;
// if two key with the same name in the object later key will be given preferance

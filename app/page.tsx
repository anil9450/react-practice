"use client";
import Increment from "@/components/Increment";
import Page1 from "@/components/Page1";
import ThemeChanger from "@/components/ThemeChanger";
import Conditional from "@/components/Conditional";
import Image from "next/image";
import "./globals.css";

import Form from "@/components/Form";
import BatchingScheduling from "@/components/BatchingScheduling";
import Form1 from "@/components/Form1";
import LifeCycle from "@/components/LifeCycle";
import { useState } from "react";
import Hooks2 from "@/components/Hooks2";

export default function Home() {
  const [condition1, setCondition] = useState(true);
  var condition = true;
  return (
    <div className="">
      <Page1 name={"anil"} />
      <Conditional />
      {condition ? <Page1 /> : <Conditional />}
      {condition && (
        <h1 className="bg-green-500">It returns only & only true value</h1>
      )}
      <Increment />
      <ThemeChanger />
      <BatchingScheduling />
      <Form />
      <Form1 />
      <div>
        <button
          className="border border-black p-1 rounded"
          onClick={() => setCondition(!condition1)}
        >
          Show Life Cycle Method Page
        </button>
        {condition1 && <LifeCycle />}
      </div>
      <Hooks2 />
    </div>
  );
}
// when click on button component show it's mounted , when hide it's unmounted.

import React from "react";

const Page1 = (props: any) => {
  const message = "Anil is a frontend developer";
  return (
    <div>
      <h1>{props.name}</h1>
      <span>{message}</span>
      <p className="bg-red-300">Adwika Adwika Adwika Adwika</p>
    </div>
  );
};

export default Page1;

function ChildComponent(props: any) {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  );
}

// this is called prop drilling

function GrandParent() {
  const message1 = "Data from GrandParent";
  return <Parent message={message1} />;
}

function Parent(props: any) {
  return <Child message={props.message1} />;
}

function Child(props: any) {
  return <div>{props.message1}</div>;
}

import React from "react";
import ButtonComponent from "../atom/ButtonComponent";

const ComponentA = () => {
  const handleSubmit = () => {
    console.log("This data is from componentA");
    return <h1>Add my data</h1>
    return <p>data is perfect</p>;
  };
  return (
    <div>
      <ButtonComponent
        lable="Submit"
        onSubmit={() => {
          handleSubmit();
        }}
      />
    </div>
  );
};

export default ComponentA;
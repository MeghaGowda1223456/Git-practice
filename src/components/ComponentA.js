import React from "react";
import ButtonComponent from "../atom/ButtonComponent";

const ComponentA = () => {
  const handleSubmit = () => {
    console.log("This data is from componentA");
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

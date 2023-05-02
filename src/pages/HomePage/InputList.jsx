import React from "react";
import { Input } from "./Input";

export const InputList = ({ inputs, onSubmit }) => {
  return (
    <div>
      {inputs.map((input) => (
        <Input key={input.key} input={input} onSubmit={onSubmit} />
      ))}
    </div>
  );
};

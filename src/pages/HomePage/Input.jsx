import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { inputValidation } from "../../services/services";

export const Input = ({ input, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (onSubmit) {
      const errors = inputValidation(input, inputValue);
      errors && setErrors(errors)
    }
  }, [onSubmit]);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>{input.label}</label>
      <input onChange={handleChangeInput} name={input.key} type={input.type} />
      {errors && errors.map((error, index) => (
        <label key={index} style={{color: 'red'}} htmlFor=""> | {error}</label>
      ))}
    </div>
  );
};

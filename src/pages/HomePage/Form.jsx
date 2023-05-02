import React from "react";
import { useState } from "react";
import { InputList } from "./InputList";

export const Form = ({ inputs }) => {
  const [submit, setSubmit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 100);
  };
  return (
    <form id="form" onSubmit={handleSubmit} noValidate>
      <InputList inputs={inputs} onSubmit={submit} />
      <button>enviar</button>
    </form>
  );
};

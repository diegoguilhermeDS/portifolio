import React from "react";

interface iInputProps {
  type: string;
  id: string;
  placeholder: string;
}

const Input = ({ type, id, placeholder }: iInputProps) => {
  return (
    <input type={type} name={id} id={id} placeholder={`${placeholder} *`} className="bg-brand-500 rounded shadow-input h-[50px] p-4 border-2 border-solid border-[#191b1e] placeholder:font-normal text-sm tracking-wide text-brand-200 outline-none"/>
  );
};

export default Input;

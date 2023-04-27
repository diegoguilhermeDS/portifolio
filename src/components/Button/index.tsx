import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  width: string;
}

export default function Button({ children, width }: iButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-1 ${width} h-10 bg-brand-100 shadow-neon rounded-lg px-1`}
    >
      {children}
    </button>
  );
}

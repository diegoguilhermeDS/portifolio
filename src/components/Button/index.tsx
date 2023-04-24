import React from "react";

interface iButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: iButtonProps) {
  return <button>{children}</button>;
}

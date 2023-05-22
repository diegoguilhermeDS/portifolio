import React, { Dispatch } from "react";

interface iThreeDotsProps {
  idProjectEmphasis: number;
  setIdProjectEmphasis: Dispatch<React.SetStateAction<number>>
}

const ThreeDots = ({ idProjectEmphasis, setIdProjectEmphasis }: iThreeDotsProps) => {

  return (
    <div className="flex gap-3">
      <div className={`w-3 h-3 rounded-full cursor-pointer ${idProjectEmphasis == 0 ? "bg-brand-100 shadow-card" : "bg-brand-300 shadow-selector"}`} onClick={() => setIdProjectEmphasis(0)}></div>
      <div className={`w-3 h-3 rounded-full cursor-pointer ${idProjectEmphasis == 1 ? "bg-brand-100 shadow-card" : "bg-brand-300 shadow-selector"}`} onClick={() => setIdProjectEmphasis(1)}></div>
      <div className={`w-3 h-3 rounded-full cursor-pointer ${idProjectEmphasis == 2 ? "bg-brand-100 shadow-card" : "bg-brand-300 shadow-selector"}`} onClick={() => setIdProjectEmphasis(2)}></div>
    </div>
  );
};

export default ThreeDots;

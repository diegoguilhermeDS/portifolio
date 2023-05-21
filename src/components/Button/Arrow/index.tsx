import Image from "next/image";
import React, { Dispatch } from "react";

import imgArrow from "../../../../public/assets/icons/arrow.png";

interface iArrowProps {
  rotate?: boolean;
  idProjectEmphasis: number;
  setIdProjectEmphasis: Dispatch<React.SetStateAction<number>>;
}

const Arrow = ({
  rotate,
  idProjectEmphasis,
  setIdProjectEmphasis,
}: iArrowProps) => {
  const handleProjectEmphasis = () => {
    if (rotate) {
      if (idProjectEmphasis == 2) {
        setIdProjectEmphasis(0);
      } else {
        setIdProjectEmphasis(idProjectEmphasis + 1);
      }
    } else {
      if (idProjectEmphasis == 0) {
        setIdProjectEmphasis(2);
      } else [setIdProjectEmphasis(idProjectEmphasis - 1)];
    }
  };

  return (
    <button
      className={`flex items-center justify-center w-[50px] h-[50px] rounded-full bg-brand-700 shadow-card cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500 ${
        rotate && "rotate-180"
      }`}
      onClick={handleProjectEmphasis}
    >
      <Image src={imgArrow} alt="icone da seta" />
    </button>
  );
};

export default Arrow;

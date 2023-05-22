import React, { Dispatch } from "react";

interface iCloseProps {
    setIsOpenModal: Dispatch<React.SetStateAction<boolean>>
}

const ButtonClose = ({setIsOpenModal}: iCloseProps) => {
  return (
    <button
      className="absolute top-3 right-3 flex items-center justify-center w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] pb-1 rounded-full bg-brand-700 shadow-card cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500"
      onClick={() => setIsOpenModal(false)}
    >
      <span className="font-bold lgtext-3xl">x</span>
    </button>
  );
};

export default ButtonClose;

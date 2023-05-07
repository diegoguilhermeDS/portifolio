import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  width: string;
}

export default function Button({ children, width }: iButtonProps) {
  return (
    <button
      className={`
        group
        relative
        flex
        gap-2
        items-center
        justify-center
        ${width}
        h-10 text-brand-100 
        text-lg tracking-[.125rem] 
        uppercase 
        overflow-hidden 
        duration-200 
        font-semibold 
        rounded-md 
        hover:text-white 
        hover:delay-1000 
        hover:bg-brand-100 
        hover:shadow-neon 
        `}
    >
      <span
        className={`absolute block top-0 -left-full w-[100%] h-[2px] bg-gradient-to-r from-transparent to-brand-100 transition-all duration-1000 group-hover:left-full`}
      ></span>

      <span className="absolute block -top-full right-0 w-[2px] h-[100%] bg-gradient-to-t from-transparent to-brand-100 transition-all duration-1000 delay-[250ms] group-hover:top-full"></span>

      <span className="absolute block bottom-0 -right-full w-[100%] h-[2px] bg-gradient-to-l from-transparent to-brand-100 transition-all duration-1000 delay-500 group-hover:right-full"></span>

      <span className="absolute block -bottom-full left-0 w-[2px] h-[100%] bg-gradient-to-b from-transparent to-brand-100 transition-all duration-1000 delay-[750ms] group-hover:bottom-full"></span>
      {children}
    </button>
  );
}

import React from "react";

export default function ButtonCV() {

  return (
    <a href={"https://drive.google.com/file/d/1khe3pDHMNIxIVpUMd2rOawBvuSpcCd4z/view?usp=sharing"} target="_blank">
      <button
        className={`
          group
          relative
          flex
          gap-2
          items-center
          justify-center
          w-[180px]
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
          className={`absolute block top-0 -left-1 w-[12%] h-[2px] bg-brand-100 transition-all duration-1000 group-hover:w-[100%]`}
        ></span>
        <span className="absolute block -top-1 left-0 w-[2px] h-[50%] bg-brand-100 transition-all duration-1000 delay-[750ms] group-hover:h-[100%]"></span>
        <span className="absolute block bottom-0 right-0 w-[2px] h-[50%] bg-brand-100 transition-all duration-1000 delay-[250ms] group-hover:h-[100%]"></span>
        <span className="absolute block bottom-0 right-0 w-[10%] h-[2px] bg-brand-100 transition-all duration-1000 delay-500 group-hover:w-[100%]"></span>
        Curriculo
        <svg
          width="25"
          height="30"
          viewBox="0 0 25 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4"
        >
          <path
            d="M24.2998 10.5709H17.5187V0.399261H7.34702V10.5709H0.565918L12.4328 22.4378L24.2998 10.5709ZM0.565918 25.8284V29.2189H24.2998V25.8284H0.565918Z"
            fill="white"
            className="fill-brand-100 group-hover:fill-white group-hover:delay-1000 group-hover:duration-200"
          />
        </svg>
      </button>
    </a>
  );
}

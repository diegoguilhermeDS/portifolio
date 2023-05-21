import Image, { StaticImageData } from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: "700" });

interface iCardSkillProps {
  skill: {
    img: StaticImageData;
    name: string;
    progress: number;
    indexColor: number;
  };
  size: number
}

const CardSkill = ({ skill, size }: iCardSkillProps) => {
  const colorVariants = [
    "bg-[#AD391133] text-[#FC490B] border-[#FC490B]",
    "bg-[#2196F333] text-[#2196F3] border-[#2196F3]",
    "bg-[#F7DF1E33] text-[#F7DF1E] border-[#F7DF1E]",
    "bg-[#124D8E33] text-[#3178C6] border-[#3178C6]",
    "bg-[#00D8FF33] text-[#00D8FF] border-[#00D8FF]",
    "bg-[#FFFFFF33] text-[#FFFFFF] border-[#FFFFFF]",
    "bg-[#44A8B333] text-[#44A8B3] border-[#44A8B3]",
    "bg-[#E0949433] text-[#E09494] border-[#E09494]",
    "bg-[#689F6333] text-[#689F63] border-[#689F63]",
    "bg-[#FDF9DC33] text-[#848484] border-[#848484]",
    "bg-[#33679133] text-[#336791] border-[#336791]",
    "bg-gradient-to-b from-[#2875B533] to-[#FDD43433] text-[#FDD434] border-b-[#FDD434] border-e-[#FDD434] border-t-[#2875B5] border-s-[#2875B5]",
    "bg-[#11322833] text-[#113228] border-[#113228]",
    "bg-[#847E7E33] text-[#FFFFFF] border-b-[#D4D4D4] border-e-[#D4D4D4] border-t-[#2E2C2C] border-s-[#2E2C2C]",
    "bg-[#EE513B33] text-[#EE513B] border-[#EE513B]",
    "bg-gradient-to-b from-[#F94B1233] via-[#FF736133] via-[#B659FF33] via-[#00BCFF33] to-[#00CF7F33] text-[#EE513B] border-t-[#F94B12] border-e-[#00BCFF] border-b-[#00CF7F] border-s-[#B659FF]",
  ];

  const shadowVariants = [
    "group-hover:shadow-html",
    "group-hover:shadow-css",
    "group-hover:shadow-js",
    "group-hover:shadow-ts",
    "group-hover:shadow-react",
    "group-hover:shadow-next",
    "group-hover:shadow-tw",
    "group-hover:shadow-sc",
    "group-hover:shadow-node",
    "group-hover:shadow-ex",
    "group-hover:shadow-post",
    "group-hover:shadow-py",
    "group-hover:shadow-dj",
    "group-hover:shadow-github",
    "group-hover:shadow-git",
    "group-hover:shadow-figma",
  ];

  return (
    <li className="group flex flex-col items-center justify-between h-32 transition ease-in-out duration-700 snap-center">
      <div className="flex items-center justify-center w-20 h-20 relative -z-10">
        <Image
          src={skill.img}
          alt="HTML5 icon"
          width={size}
          height={size}
          className="saturate-0 brightness-50"
        />
        <div
          className={`absolute -z-10 -bottom-6 -right-5 flex items-center justify-center w-16 h-16 rounded-full border-[3.75px] font-bold text-xs transition ease-in-out duration-500 ${
            colorVariants[skill.indexColor]
          } ${shadowVariants[skill.indexColor]} ${font.className} `}
        >{`${skill.progress}%`}</div>
      </div>
      <span className="text-xs font-semibold">{skill.name}</span>
    </li>
  );
};

export default CardSkill;

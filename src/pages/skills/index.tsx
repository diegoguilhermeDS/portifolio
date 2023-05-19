import Image from "next/image";
import React from "react";
import htmlIcon from "../../../public/assets/html-vector.svg";
import { skillsDb } from "@/database/skills.db";

export default function skills() {
  return (
    <main className="flex justify-around items-center container mx-auto min-h-screen pt-24">
      <h2 className="font-normal text-2xl tracking-wide text-brand-200">Essas são algumas das tecnologias e Ferramentas que possuo conhecimento no momento.</h2>
      <ul className="grid grid-cols-7 gap-x-14 gap-y-14">
        {skillsDb.map((skill, index) => (
          <li
            key={index}
            className="group flex flex-col items-center gap-4 grayscale transition ease-in-out duration-700 delay-150  hover:grayscale-0 "
          >
            <Image src={skill.img} alt="HTML5 icon" width={80} height={80} />
            <span className="group-hover:text-white text-lg font-semibold">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

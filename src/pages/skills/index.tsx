import Image from "next/image";
import React from "react";
import { skillsDb } from "@/database/skills.db";
import CardSkill from "@/components/CardSkill";

export default function skills() {
  return (
    <main className="flex flex-col items-center p-2 gap-4 container mx-auto min-h-screen pt-24 lg:justify-around lg:items-center">
      <h3 className="font-normal text-xl text-justify sm:text-center sm:text-2xl tracking-wide text-brand-400">
        Essas são algumas das tecnologias e Ferramentas que possuo conhecimento
        no momento.
      </h3>
      <section className="flex flex-col lg:flex-row gap-10 lg:justify-between xl:justify-around w-full">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-2xl tracking-wide">Tecnologias</h2>
          <ul className="grid grid-rows-1 md:grid-cols-5 items-center grid-flow-col md:grid-flow-dense px-4 gap-x-14 gap-y-14 overflow-x-auto md:overflow-x-visible pb-4 will-change-scroll snap-x">
            {skillsDb.techs.map((skill, index) => (
              <CardSkill skill={skill} size={80} key={index} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-2xl tracking-wide">Ferramentas</h2>
          <ul className="grid grid-rows-1 md:grid-cols-3 items-center grid-flow-col md:grid-flow-dense px-4 gap-x-14 gap-y-14 overflow-x-auto md:overflow-x-visible pb-4 will-change-scroll snap-x">
            {skillsDb.tools.map((skill, index) => (
              <CardSkill skill={skill} size={60} key={index} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

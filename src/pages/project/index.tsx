import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/services/api";
import { iProjectPageProps, iRepository } from "./types";

import imgProject from "../../../public/assets/img/image 1.png";
import Button from "@/components/Button";

export async function getStaticProps() {
  const data: iRepository[] = await api
    .get("diegoguilhermeDS/repos")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    props: {
      repositories: data,
    },
  };
}

export default function Project({ repositories }: iProjectPageProps) {
  const [featuredProjects, setFeaturedProjects] = useState<iRepository[]>([]);

  /* useEffect(() => {
    (() => {

    })()
  }, []) */

  return (
    <main className="flex flex-col gap-32 container min-h-screen mx-auto pt-32 border-l-orange-500">
      <section className="flex justify-center">
        <div className="flex gap-8 max-w-[820px] w-full p-4 py-8 bg-brand-300 shadow-card">
          <Image
            src={imgProject}
            alt="imagem do projeto"
            width={460}
            height={100}
          />
          <div className="flex flex-col gap-6 max-w-[300px]">
            <h1 className="font-bold text-xl tracking-wide">Nome do projeto</h1>
            <p className="font-normal text-xs text-brand-200 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              repudiandae, corrupti atque perferendis id magni dolorem! Sunt
              atque totam quis, reiciendis neque provident necessitatibus
              voluptatem quasi pariatur, distinctio inventore ipsum?
            </p>
            <p className="font-normal text-xs text-brand-200 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              repudiandae, corrupti atque perferendis id magni dolorem! Sunt
              atque totam quis, reiciendis neque provident necessitatibus
              voluptatem quasi pariatur, distinctio inventore ipsum?
            </p>
            <div className="flex mt-10">
              <Button heigth={38}>ver projeto</Button>
              <button>ver mais</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ul className="grid grid-cols-3 justify-items-center gap-y-10 bg-green-200">
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card">
            <div className="max-w-[340px] overflow-hidden">
              <Image
                src={imgProject}
                alt="imagem do projeto"
                width={340}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[28px] tracking-wide">
                Nu Kenzie
              </h2>
              <button
                className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
                onClick={() => alert("pegando")}
              >
                ver mais
              </button>
            </div>
          </li>
        </ul>
      </section>
      {/* {repositories.map((rep: iRepository, index: number) => (
        <p key={index}>{rep.name}</p>
      ))} */}
    </main>
  );
}

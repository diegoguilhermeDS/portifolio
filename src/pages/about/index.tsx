import Image from "next/image";
import React from "react";
import dgImg2 from "../../../public/assets/dg-img-about.png";

export default function about() {
  return (
    <main className="flex justify-around items-center container mx-auto min-h-screen pt-24">
      <section>
        <Image
          src={dgImg2}
          alt="diego guilherme image"
          width="444"
          height="444"
        />
      </section>
      <section className="w-[566px] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Sobre min</h2>
          <p className="text-base font-normal text-brand-200 leading-9 text-justify w-[500px]">
            Desde cedo, fui fascinado por videogames e tecnologia, o que me
            motivou a explorar ainda mais esse universo. Na Kenzie Academy, que
            tive a oportunidade de me aprofundar em desenvolvimento web e dar
            meus primeiros passos oficiais nessa carreira. Durante meu tempo na
            Kenzie, pude adquirir conhecimentos sólidos em várias áreas.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Formação</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Desenvolvedor Full Stack</h3>
              <span className="text-base font-normal text-brand-200">Kenzie Academy</span>
              <span className="text-base font-normal text-brand-200">2023</span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Experiência</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Monitor de ensino</h3>
              <span className="text-base font-normal text-brand-200">Kenzie Academy</span>
              <span className="text-base font-normal text-brand-200">Set/22 - Abr/23</span>
            </div>
        </div>
        </div>
      </section>
    </main>
  );
}

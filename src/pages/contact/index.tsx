import Image from "next/image";
import React from "react";
import imgContact from "../../../public/assets/img-contact.png";
import { iconsContactDb } from "@/database/skills.db";

export default function contact() {
  return (
    <main className="flex justify-around items-center container mx-auto min-h-screen pt-24">
      <section className="flex flex-col gap-10 items-center w-1/3 p-5 rounded-xl bg-brand-300 shadow-card">
        <Image src={imgContact} alt="imagem de aperto de mãos" width={400} height={400}/>
        <div className="flex flex-col w-[96%] gap-7">
          <h2 className="font-semibold text-lg tracking-wide">
            Informações de Contatos
          </h2>
          <div className="flex gap-4">
            <h3 className="font-normal text-base tracking-wide text-brand-400">
              Email :
            </h3>
            <a href="mailto:diegoguilherme752@outlook.com?subject=Olá, Diego! Acessei seu repositório e estou entrando em contato para :">
              diegoguilherme752@outlook.com
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[96%] gap-6">
          <h2 className="font-normal text-base tracking-wide text-brand-400">
            como me encontrar
          </h2>
          <ul className="flex items-center gap-5">
            {iconsContactDb.map((icon, index) => (
              <a href={icon.href} target="_blank" key={index}>
                <li
                  className={`saturate-0 ${
                    (icon.alt == "github" && "brightness-[0.4]") ||
                    (icon.alt == "gmail" && "brightness-[2]")
                  } hover:saturate-100 hover:-translate-y-2 ${
                    (icon.alt == "github" && "hover:brightness-[1]") ||
                    (icon.alt == "gmail" && "hover:rightness-[1]")
                  } cursor-pointer transition duration-500 ease-in-out`}
                >
                  <Image
                    src={icon.img}
                    alt={`Imagen icon ${icon.alt}`}
                    width={40}
                  />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-1/2 flex flex-col gap-10 px-12 py-5 rounded-md bg-brand-300 shadow-card">
        <div>
          <h1>Envie-me uma mensagem</h1>
          <span>
            preencha o formulário abaixo e me envie uma mensagem no whatsapp
          </span>
        </div>
        <form action="" className="flex flex-col gap-3">
          <input type="text" name="name" id="name" placeholder="Name *" />
          <input type="email" name="email" id="email" placeholder="Email *" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto *"
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Mensagem *"
            className="mt-1"
          ></textarea>
          {/* <button className='mt-4 flex self-center'>Enviar mensagem <Image src={whatsIcon} alt={"whatsapp icon"} width={20} height={20} /></button> */}
        </form>
      </section>
    </main>
  );
}

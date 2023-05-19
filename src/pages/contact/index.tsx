import Image from "next/image";
import React from "react";
import imgContact from "../../../public/assets/img-contact.png";
import { iconsContactDb } from "@/database/skills.db";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function contact() {
  return (
    <main className="flex flex-col items-center gap-12 container overflow-hidden p-2 pt-10 mx-auto min-h-screen mt-16 lg:flex-row lg:justify-around lg:items-start lg:pt-24">
      <section className="flex flex-col gap-10 items-center w-[100%] p-4 rounded-xl bg-brand-300 shadow-card lg:max-w-[450px] lg:py-6 lg:gap-12">
        <div className="w-[100%] lg:max-w-[388px] h-[40%] rounded-3xl overflow-hidden md:rounded-[46px] lg:rounded-3xl">
          <Image
            src={imgContact}
            alt="imagem de aperto de mãos"
            width={400}
            height={400}
            className="transition-all ease-in-out duration-500 object-cover hover:scale-110 w-full h-full"
          />
        </div>
        <div className="flex flex-col w-[96%] gap-7">
          <h2 className="font-semibold text-lg tracking-wide">
            Informações de Contatos
          </h2>
          <div className="flex flex-row gap-4">
            <h3 className="font-normal text-sm lg:text-base tracking-wide text-brand-400">
              Email :
            </h3>
            <a
              href="mailto:diegoguilherme752@outlook.com?subject=Olá, Diego! Acessei seu Portfólio e estou entrando em contato para :"
              className="text-xs lg:text-base"
            >
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
      <section className="flex flex-col gap-10 w-full px-4 py-5 rounded-md bg-brand-300 shadow-card lg:px-12 lg:max-w-[640px]">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-xl tracking-wide">
            Envie-me uma mensagem
          </h1>
          <span className="font-normal text-sm text-brand-400">
            preencha o formulário abaixo e me envie uma mensagem no email
          </span>
        </div>
        <form action="https://formsubmit.co/diegoguilherme752@outlook.com" method="POST" className="flex flex-col gap-3 w-full">
          <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
          <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, obrigado pelo contato e logo responderei!"></input>
          <input type="hidden" name="_template" value="box"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <Input type="text" id="name" placeholder="Name" />
          <Input type="Email" id="email" placeholder="E-mail" />
          <Input type="text" id="subject" placeholder="Assunto" />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Mensagem *"
            className="resize-none mt-1 mb-5 bg-brand-500 rounded shadow-input h-[150px] p-4 border-2 border-solid border-[#191b1e] outline-none placeholder:font-normal text-sm tracking-wide text-brand-200"
          ></textarea>
          <Button heigth={50}>Enviar Mensagem</Button>
        </form>
      </section>
    </main>
  );
}

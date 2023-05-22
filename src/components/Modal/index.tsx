import { iRepository } from "@/pages/project/types";
import Image from "next/image";
import React, { Dispatch } from "react";

import tagsIcon from "../../../public/assets/icons/content-code.png";
import externalLinkIcon from "../../../public/assets/icons/external-link.png";
import githubIcon from "../../../public/assets/icons/github-p.png";
import ButtonClose from "../Button/Close";

interface iModalProps {
  repository: iRepository;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ repository, setIsOpenModal }: iModalProps) => {
  return (
    <div
      id="container-modal"
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-brand-modal"
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;

        return target.id == "container-modal" && setIsOpenModal(false);
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-6 w-[90%] lg:w-[775px] h-[410px] py-5 lg:py-0 px-9 rounded-2xl bg-brand-300 shadow-card relative animate-modal">
        <ButtonClose setIsOpenModal={setIsOpenModal} />
        <div className="w-full h-[200px] lg:w-[380px] lg:h-[280px] overflow-hidden rounded-xl">
          <Image
            src={repository.img!}
            alt="imagem do projeto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-16">
          <div className="flex flex-col gap-4 h-[127px] w-[300px]">
            <h2 className="font-bold text-xl tracking-wide text-center">
              {repository.name}
            </h2>
            <p className="font-light text-[10px] lg:text-xs text-justify text">
              {repository.description}
            </p>
          </div>

          {/* container informations */}
          <div className="flex flex-col gap-2 lg:gap-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px] overflow-hidden">
                  <Image
                    src={tagsIcon}
                    alt="tags icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">
                  Linguagens :
                </h3>
              </div>
              <div className="flex flex-wrap gap-1 max-w-[160px]">
                <span className="font-normal text-[8px] tracking-wide bg-brand-100 px-2 rounded">
                  {repository.language}
                </span>
                {repository.topics.map((tag: string, index) => {
                  if (index <= 1)
                    return (
                      <span
                        className="font-normal text-[8px] tracking-wide bg-brand-100 px-2 rounded"
                        key={tag}
                      >
                        {`${tag}`}
                      </span>
                    );
                })}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <div className="w-[16px] h-[16px] overflow-hidden">
                  <Image
                    src={externalLinkIcon}
                    alt="tags icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">
                  Visualizar :
                </h3>
              </div>
              <a
                href={repository.homepage!}
                target="_blank"
                className="font-normal text-xs tracking-wide text-brand-200"
              >
                deploy
              </a>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <div className="w-[16px] h-[16px] overflow-hidden">
                  <Image
                    src={githubIcon}
                    alt="tags icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">
                  Ver código :
                </h3>
              </div>
              <a
                href={repository.html_url}
                target="_blank"
                className="font-normal text-xs tracking-wide text-brand-200"
              >
                github.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

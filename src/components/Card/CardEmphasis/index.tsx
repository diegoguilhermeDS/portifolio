import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { iRepository } from "@/pages/project/types";
import Image from "next/image";
import React, { Dispatch, useState } from "react";

interface iCardEmphasisProps {
  repositoryEmphasis: iRepository;
}

const CardEmphasis = ({ repositoryEmphasis }: iCardEmphasisProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8 lg:w-[820px] h-[450px] p-4 py-8 bg-brand-300 shadow-card">
      <div className="w-full lg:w-[440px] h-[160px] lg:h-[300px] overflow-hidden rounded-lg">
        <Image
          src={repositoryEmphasis.img!}
          alt="imagem do projeto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 max-w-[300px] lg:w-full lg:h-[300px]">
        <h1 className="font-bold text-xl tracking-wide text-center">
          {repositoryEmphasis.name}
        </h1>
        <p className="font-normal text-xs text-brand-200 text-justify">
          {repositoryEmphasis.description}
        </p>
        <div className="flex mt-10 gap-16">
          <a href={repositoryEmphasis.homepage!}>
            <Button heigth={38} width={129}>
              ver projeto
            </Button>
          </a>
          <button
            className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
            onClick={() => setIsOpenModal(true)}
          >
            ver mais
          </button>
        </div>
      </div>
      {isOpenModal && (
        <Modal
          repository={repositoryEmphasis}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
};

export default CardEmphasis;

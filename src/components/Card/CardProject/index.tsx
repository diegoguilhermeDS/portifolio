import Image from "next/image";
import React, { Dispatch, useState } from "react";

import { iRepository } from "@/pages/project/types";
import Modal from "../../Modal";

interface iCardProjectProps {
  repository: iRepository;

}

const CardProject = ({ repository }: iCardProjectProps) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <li className="flex flex-col gap-7 max-w-[370px] px-4 py-4 bg-brand-300 rounded-3xl shadow-card transition-all ease-linear duration-300 hover:bg-brand-500">
        <div className="max-w-[340px] h-[205px] overflow-hidden  rounded-3xl md:rounded-[46px] lg:rounded-3xl">
          <Image
            src={repository.img!}
            alt="imagem do projeto"
            width={340}
            height={100}
            className="transition-all ease-in-out duration-500 object-cover hover:scale-110 w-full h-full"
          />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl tracking-wide">
            {repository.name}
          </h2>
          <button
            className="font-normal text-base text-brand-600 tracking-wide transition-colors ease-in duration-300 hover:text-white"
            onClick={() => setIsOpenModal(true)}
          >
            ver mais
          </button>
        </div>
      </li>
      {isOpenModal && (
        <Modal repository={repository} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};

export default CardProject;

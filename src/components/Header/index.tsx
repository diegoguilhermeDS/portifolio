/* eslint-disable react-hooks/exhaustive-deps */
import navBar from "@/database/navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonCurriculo from "../Button/ButtonCV";
import { useRouter } from "next/router";
import Image from "next/image";

import menuIcon from "../../../public/assets/icons/menu-svgrepo-com.png";
import closeIcon from "../../../public/assets/icons/Vector.png";

export default function Header() {
  const [navSelected, setNavSelected] = useState("");
  const [menu, setMenu] = useState(menuIcon);

  const params = useRouter();

  function getNav() {
    setNavSelected(params.asPath);
  }
  useEffect(() => {
    getNav();
  }, [params]);

  function handleMenu() {
    if (menu == menuIcon){
      setMenu(closeIcon)
    } else {
      setMenu(menuIcon)
    }
  }

  return (
    <header className="fixed top-0 left-0 border-box w-full bg-brand-header border-b border-[rgba(255, 255, 255, 0.25)] backdrop-blur-md">
      <div className="container mx-auto h-full flex gap-4 justify-between items-center relative px-2">
        <h1 className="font-semibold text-2xl tracking-wider w-full h-20 flex items-center justify-start">
          Diego Guilherme
        </h1>
        <button className="w-[50px] h-[50px] overflow-hidden flex items-center justify-center cursor-pointer lg:hidden" onClick={handleMenu}>
          <Image src={menu} alt="menu icon" />
        </button>
        <nav className={`absolute lg:static left-0 top-20 z-20 flex flex-col lg:flex-row gap-5 items-start max-w-max px-2 lg:items-center py-4 lg:opacity-100 transition-all ease-in-out duration-700  ${menu == closeIcon ? "animate-menu" : "animate-closeMenu"} lg:animate-none border-box  border-b border-e border-[rgba(255, 255, 255, 0.25)] backdrop-blur-3xl bg-gray-900/30 lg:border-none lg:backdrop-blur-none lg:bg-transparent`}>
          <ul className="lg:flex gap-x-7">
            {navBar.map((nav, index) => (
              <li
                key={index}
                className={`h-8 px-3.5 transition-all duration-700 flex items-center justify-center ${
                  navSelected === nav.href
                    ? "bg-brand-100 shadow-[0_0_50px_#6C1BED] rounded-md"
                    : "bg-transparent hover:scale-125 transition-transform duration-500"
                }`}
              >
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <ButtonCurriculo />
        </nav>
      </div>
    </header>
  );
}

import navBar from "@/database/navbar";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [navSelected, setNavSelected] = useState("/");

  return (
    <header className="fixed top-0 left-0 border-box w-full h-20 bg-brand-header border-b border-[rgba(255, 255, 255, 0.25)] backdrop-blur-md">
      <div className="container mx-auto h-full flex justify-between items-center">
        <h1 className="font-semibold text-2xl tracking-wider ">Diego Guilherme</h1>
        <nav>
          <ul className="flex gap-x-7">
            {navBar.map((nav, index) => (
              <li
                key={index}
                className={`h-6 px-3.5 transition-all duration-700 ${
                  navSelected === nav.href
                    ? "bg-brand-100 shadow-[0_0_50px_#6C1BED] rounded-lg"
                    : "bg-transparent hover:scale-125 transition-transform duration-500"
                }`}
              >
                <Link href={nav.href} onClick={() => setNavSelected(nav.href)}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

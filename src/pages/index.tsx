import Image from "next/image";
import dgImg from "../../public/assets/dg-img-home.png";
import dgTextImg from "../../public/assets/{diego-guilherme}.png";
import { Source_Code_Pro } from "next/font/google";
import { iconsContactDb } from "@/database/skills.db";

const SCP = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col-reverse items-center p-2 gap-20 container mx-auto min-h-screen pt-40 lg:flex-row lg:justify-around lg:items-center`}
    >
      <section className="flex flex-col gap-7 items-start">
        <div className="flex flex-col gap-2 sm:gap-6">
          <h2 className="font-semibold text-2xl lg:text-4xl">Olá, eu sou</h2>
          <Image src={dgTextImg} alt="Diego Guilherme" className="w-[80%] md:w-full"/>
          <h2 className="font-semibold text-2xl lg:text-4xl">
            um desenvolvedor Front-end.
          </h2>
        </div>
        <div>
          <h3
            className={`text-brand-100 text-xl font-medium relative ${SCP.className} max-w-max 
            before:content-[""]
            before:absolute
            before:top-0
            before:right-0
            before:left-0
            before:bottom-0
            before:bg-[#0f0f0f]
            before:animate-typewrite

            after:content-[""]
            after:absolute
            after:top-0
            after:right-0
            after:left-0
            after:bottom-0
            after:w-[0.125rem]
            after:bg-brand-100
            after:animate-cursor

            `}
          >
            {"< Back-end em formação /> "}
          </h3>
        </div>
        <div className="flex flex-col gap-9 items-start mt-0">
          <ul className="flex items-center gap-4 md:gap-8">
            {iconsContactDb.map((icon, index) => (
              <a href={icon.href} target="_blank" key={index}>
                <li
                  className={`saturate-0 ${
                    (icon.alt == "github" && "brightness-[0.4]") ||
                    (icon.alt == "gmail" && "brightness-[2]")
                  } hover:saturate-100 hover:-translate-y-2 ${
                    (icon.alt == "github" && "hover:brightness-[1]") ||
                    (icon.alt == "gmail" && "hover:rightness-[1]")
                  } cursor-pointer transition duration-500 ease-in-out
                    ${icon.alt == "instagram" && "hidden"} w-[80%] md:w-full`}
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
      <section>
        <Image
          src={dgImg}
          alt="diego guilherme image"
          width={544}
          height={544}
        />
      </section>
    </main>
  );
}

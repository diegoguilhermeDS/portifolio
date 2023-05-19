import Image from "next/image";
import dgImg from "../../public/assets/dg-img-home.png";
import dgTextImg from "../../public/assets/{diego-guilherme}.png";
import { Source_Code_Pro } from "next/font/google";
import ButtonCurriculo from "@/components/ButtonCV";

const SCP = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex justify-around items-center container mx-auto min-h-screen pt-24`}
    >
      <section className="flex flex-col gap-7">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-4xl">Olá, eu sou</h2>
          <Image src={dgTextImg} alt="Diego Guilherme" />
          <h2 className="font-semibold text-4xl">
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
        <div className="flex flex-col gap-9 items-start">
          <ul className="flex gap-8">
            <li>linkedin</li>
            <li>github</li>
            <li>email</li>
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

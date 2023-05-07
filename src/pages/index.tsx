import Image from "next/image";
import dgImg from "../../public/assets/dg-img-1.png";
import dgTextImg from "../../public/assets/{Diego Guilherme}.png";
import Button from "@/components/Button";
import { Source_Code_Pro } from "next/font/google";

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
          <Button width="w-[160px]">
            Curriculo
            <svg
              width="25"
              height="30"
              viewBox="0 0 25 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
            >
              <path
                d="M24.2998 10.5709H17.5187V0.399261H7.34702V10.5709H0.565918L12.4328 22.4378L24.2998 10.5709ZM0.565918 25.8284V29.2189H24.2998V25.8284H0.565918Z"
                fill="white"
                className="fill-brand-100 group-hover:fill-white group-hover:delay-1000 group-hover:duration-200"
              />
            </svg>
          </Button>
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

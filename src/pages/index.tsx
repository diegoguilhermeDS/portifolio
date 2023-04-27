import Image from "next/image";
import dgImg from "../../public/assets/dg-img-1.png";
import dgTextImg from "../../public/assets/{Diego Guilherme}.png";
import iconDownload from "../../public/assets/icon-download.svg";
import Button from "@/components/Button";

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
          <h3 className="text-brand-100">{"< Back-end em formação />"}</h3>
        </div>
        <div className="flex flex-col gap-9 items-start">
          <ul className="flex gap-8">
            <li>linkedin</li>
            <li>github</li>
            <li>email</li>
          </ul>
          <Button width="w-[160px]">
            Curriculo
            <Image
              src={iconDownload}
              alt="icon download"
              width="17"
              height="17"
            />
          </Button>
        </div>
      </section>
      <section>
        <Image
          src={dgImg}
          alt="diego guilherme image"
          width={644}
          height={644}
        />
      </section>
    </main>
  );
}

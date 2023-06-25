import React, { useState } from "react";
import { api } from "@/services/api";

import CardProject from "@/components/Card/CardProject";
import Arrow from "@/components/Button/Arrow";
import ThreeDots from "@/components/ThreeDots";
import { RepoDbImgs } from "@/database/repoImgs";
import CardEmphasis from "@/components/Card/CardEmphasis";

import notFoundImg from "../../../public/assets/img/not-img.png"

import { StaticImageData } from "next/image";

export interface iRepositoryRequest {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: any;
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string;
  topics: string[];
  homepage: string | null;
}

export interface iRepository extends iRepositoryRequest {
  img: StaticImageData | string | undefined;
}

export interface iProjectPageProps {
  repositories: iRepository[];
  repositoriesEmphasis: iRepository[];
}


export async function getStaticProps() {
  const { data } = await api.get("diegoguilhermeDS/repos")
  const newDataRepos = data.map((repo: iRepositoryRequest) => {
    const findImg = RepoDbImgs.find((repoDb) => repoDb.name == repo.name)
    const img = findImg ? findImg.img : notFoundImg
    const newRepo: iRepository = { ...repo, img };

    return newRepo;
  })

  const emphasisProjects = ["nu-kenzie", "hamburgueria-da-kenzie", "portifolio"]
  const dataEmphasis = newDataRepos.filter((repo: iRepository) => {
    console.log(repo)
    if (emphasisProjects.includes(repo.name)) {
      return repo;
    }
  });

  return {
    props: {
      repositories: newDataRepos.sort((a: iRepository, b: iRepository) => {
        if(a.created_at > b.created_at){
          return -1
        } else {
          return 1
        }
      }),
      repositoriesEmphasis: dataEmphasis.sort(
        (a: iRepository, b: iRepository) =>
          new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
      ),
    },
  };
}

export default function Project({
  repositories,
  repositoriesEmphasis ,
}: iProjectPageProps) {
  const [featuredProjects, setFeaturedProjects] = useState<
    iRepositoryRequest[]
  >([]);
  const [idProjectEmphasis, setIdProjectEmphasis] = useState(0);

  return (
    <main className="flex flex-col gap-32 container min-h-screen mx-auto pt-32 pb-10 border-l-orange-500 overflow-hidden">
      <section className="flex flex-col items-center gap-6">
        <div className="flex items-center lg:justify-center gap-16 w-[94%] lg:w-full">
          <Arrow
            idProjectEmphasis={idProjectEmphasis}
            setIdProjectEmphasis={setIdProjectEmphasis}
          />
          <CardEmphasis
            repositoryEmphasis={repositoriesEmphasis[idProjectEmphasis]}
          />
          <Arrow
            rotate={true}
            idProjectEmphasis={idProjectEmphasis}
            setIdProjectEmphasis={setIdProjectEmphasis}
          />
        </div>
        <ThreeDots
          idProjectEmphasis={idProjectEmphasis}
          setIdProjectEmphasis={setIdProjectEmphasis}
        />
      </section>
      <section>
        <ul className="grid grid-rows-1 grid-flow-col lg:grid-flow-dense overflow-x-auto lg:grid-cols-3 justify-items-center gap-y-10 gap-x-10 py-10">
          {repositories.map(
            (repo: iRepository) =>
              repo.name != "diegoguilhermeDS" && (
                <CardProject key={repo.id} repository={repo} />
              )
          )}
        </ul>
      </section>
    </main>
  );
}

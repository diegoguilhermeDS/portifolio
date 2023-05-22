import React, { useState } from "react";
import { api } from "@/services/api";
import { iProjectPageProps, iRepository, iRepositoryRequest } from "./types";

import CardProject from "@/components/Card/CardProject";
import Arrow from "@/components/Button/Arrow";
import ThreeDots from "@/components/ThreeDots";
import { RepoDbImgs } from "@/database/repoImgs";
import CardEmphasis from "@/components/Card/CardEmphasis";

export async function getStaticProps() {
  const data: iRepository[] = await api
    .get("diegoguilhermeDS/repos")
    .then((res) =>
      res.data.map((repo: iRepositoryRequest) => {
        const img = RepoDbImgs.find((repoDb) => repoDb.name == repo.name)!.img;
        const newRepo: iRepository = { ...repo, img };

        return newRepo;
      })
    )
    .catch((err) => console.log(err));

  const emphasisProjects = ["nu-kenzie", "hamburgueria-da-kenzie", "portifolio"]
  const dataEmphasis = data.filter((repo: iRepository) => {
    if (emphasisProjects.includes(repo.name)) {
      return repo;
    }
  });

  return {
    props: {
      repositories: data.sort((a, b) => {
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
  repositoriesEmphasis,
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

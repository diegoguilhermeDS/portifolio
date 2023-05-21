import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/services/api";
import { iProjectPageProps, iRepository, iRepositoryRequest } from "./types";

import imgProject from "../../../public/assets/img/image 1.png";
import Button from "@/components/Button";
import CardProject from "@/components/Card/CardProject";
import Arrow from "@/components/Button/Arrow";
import ThreeDots from "@/components/ThreeDots";
import { RepoDbImgs } from "@/database/repoImgs";
import CardEmphasis from "@/components/Card/CardEmphasis";

export async function getStaticProps() {
  const data: iRepository[] = await api
    .get("kellygalliani/repos")
    .then((res) =>
      res.data.map((repo: iRepositoryRequest) => {
        const img = RepoDbImgs.find((repoDb) => repoDb.name == repo.name)!.img;
        const newRepo: iRepository = { ...repo, img };

        return newRepo;
      })
    )
    .catch((err) => console.log(err));

  const dataEmphasis = data.filter((repo: iRepository) => {
    if (repo.name.slice(0, 3) != "api" && repo.name != "diegoguilhermeDS") {
      return repo;
    }
  });


  return {
    props: {
      repositories: data,
      repositoriesEmphasis: dataEmphasis.sort(
        (a: iRepository, b: iRepository) =>
          new Date(a.updated_at).getTime() + new Date(b.updated_at).getTime()
      )
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
    <main className="flex flex-col gap-32 container min-h-screen mx-auto pt-32 border-l-orange-500">
      <section className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-16">
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
        <ul className="grid grid-cols-3 justify-items-center gap-y-10">
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

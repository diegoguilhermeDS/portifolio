import { StaticImageData } from "next/image"

export interface iRepositoryRequest {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: any
  languages_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  language: string
  topics: string[]
  homepage: string | null
}

export interface iRepository extends iRepositoryRequest {
  img: StaticImageData | string | undefined
}

export interface iProjectPageProps {
    repositories: iRepository[]
    repositoriesEmphasis: iRepository[]
}
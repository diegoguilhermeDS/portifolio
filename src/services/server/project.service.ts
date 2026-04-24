import clientPromise from "@/src/lib/mongodb"

export const getProjects = async () => {
  const client = await clientPromise
  const db = client.db("portifolio")

  const projects = await db
    .collection("projects")
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return projects
}

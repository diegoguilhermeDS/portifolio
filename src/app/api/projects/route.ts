import { errorResponse, successResponse } from "@/src/lib/api-response"
import { getProjects } from "@/src/services/server/project.service"

export async function GET() {
  try {
    const projects =  await getProjects()
    return successResponse(projects)
  } catch (error) {
    console.error("MongoDB connection error: ", error)

    return errorResponse("Failed to fetch projects.")
  }
}

// import { errorResponse, successResponse } from "@/src/lib/api-response"
// import {
//   addFeedback,
//   getFeedback,
// } from "@/src/services/server/feedback.service"
// import { feedbackSchema } from "@/src/types/feedback"

// export async function GET() {
//   try {
//     const feedbacks = await getFeedback()
//     return successResponse(feedbacks)
//   } catch (error) {
//     console.error("MongoDB connection error: ", error)

//     return errorResponse("Failed to fetch feedback.")
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const parsed = feedbackSchema.safeParse(body)

//     if (!parsed.success) {
//       return errorResponse("Invalid data", 401)
//     }

//     const newFeedback = addFeedback(parsed.data)
//     return successResponse(newFeedback)
//   } catch (error) {
//     console.error("MongoDB connection error: ", error)

//     return errorResponse("Failed to fetch feedback.")
//   }
// }

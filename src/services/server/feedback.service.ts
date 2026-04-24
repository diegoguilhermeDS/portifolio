import clientPromise from "@/src/lib/mongodb"
import {  FeedbackInput } from "@/src/types/feedback"

export const getFeedback = async () => {
  const client = await clientPromise
  const db = client.db("portifolio")

  const feedbacks = await db
    .collection("feedback")
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return feedbacks
}

export const addFeedback = async (payload: FeedbackInput) => {
  
  const client = await clientPromise
  const db = client.db("portifolio")

  const newFeedback = {
    ...payload,
    createdAt: new Date(),
  }

  await db.collection("feedback").insertOne(newFeedback)

  return newFeedback
}

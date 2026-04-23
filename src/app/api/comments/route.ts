import clientPromise from "@/src/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("portifolio")

    const comments = await db
      .collection("comments")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ success: true, data: comments })
  } catch (error) {
    console.error("MongoDB connection error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects.",
      },
      { status: 500 },
    )
  }
}

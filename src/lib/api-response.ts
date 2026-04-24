import { NextResponse } from "next/server"

const successResponse = (data: unknown, status = 200) =>
  NextResponse.json({ success: true, data }, { status })

const errorResponse = (message: string, status = 500) =>
  NextResponse.json({ success: false, error: message }, { status })

export {
    successResponse, 
    errorResponse
}
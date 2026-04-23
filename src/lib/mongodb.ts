import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI?.trim()

if (!uri) {
  throw new Error("MONGODB_URI not defined")
}

if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
  throw new Error(`MONGODB_URI inválida: ${JSON.stringify(uri)}`)
}

type GlobalMongo = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>
}

const globalForMongo = globalThis as GlobalMongo

const client = new MongoClient(uri)

const clientPromise =
  process.env.NODE_ENV === "development"
    ? globalForMongo._mongoClientPromise ??= client.connect()
    : client.connect()

export default clientPromise
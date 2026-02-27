import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB_NAME!;

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function getAllBlogs() {
  const client = await connectToDatabase();
  const db = client.db(dbName);
  return db.collection("blogsData").find().sort({ createdAt: -1 }).toArray();
}

export async function getBlogById(id: string) {
  const client = await connectToDatabase();
  const db = client.db(dbName);
  return db.collection("blogsData").findOne({ id });
}

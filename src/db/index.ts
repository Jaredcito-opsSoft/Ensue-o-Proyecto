import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

let client: postgres.Sql | null = null;
let db: Db | null = null;

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to use the database.");
  }

  if (!client) {
    client = postgres(process.env.DATABASE_URL, { max: 1 });
  }

  if (!db) {
    db = drizzle(client, { schema });
  }

  return db;
}

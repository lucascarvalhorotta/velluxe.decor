import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Comentado para rodar local sem banco
// if (!process.env.DATABASE_URL) {
//   throw new Error(
//     "DATABASE_URL must be set. Did you forget to provision a database?",
//   );
// }

// Mock do banco para desenvolvimento local
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/mock";

export const pool = new Pool({ connectionString: DATABASE_URL });
export const db = drizzle(pool, { schema });

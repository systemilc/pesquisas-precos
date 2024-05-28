import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.PG_PORT) || 5432, // Usar 5432 como padrão se PG_PORT não estiver definido
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: false, // Desativa SSL
  });

  try {
    await client.connect();
    const res = await client.query("SELECT $1::text as connected", [
      "Connection to PostgreSQL successful!",
    ]);
    console.log(res.rows[0].connected);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error connecting to PostgreSQL:", error.message);
    } else {
      console.error("An unknown error occurred");
    }
  } finally {
    await client.end();
  }
})();

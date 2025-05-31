import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql será pg pois estamos usando o postgree
    usePlural: true, //para usar plural no nome das tabelas
  }),
  user: {
    modelName: "usersTable", //para usar o nome da tabela users
  },
  session: {
    modelName: "sessionsTable", //para usar o nome da tabela sessions
  },
  account: {
    modelName: "accountsTable", //para usar o nome da tabela accounts
  },
  verification: {
    modelName: "verificationsTable", //para usar o nome da tabela verifications
  },
  //... the rest of your config
});

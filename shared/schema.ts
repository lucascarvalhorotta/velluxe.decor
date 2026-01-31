import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Schema de inserção com as validações de bloqueio que você pediu
export const insertContactRequestSchema = createInsertSchema(contactRequests, {
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(8, "Telefone inválido"),
  city: z.string().min(2, "Informe sua cidade"),
  email: z.string().email("E-mail inválido"),
  message: z.string().optional(),
}).omit({
  id: true,
  createdAt: true,
});

export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
import type { Express } from "express";
import type { Server } from "http";
// import { storage } from "./storage"; // Comentado para rodar sem banco
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // Mock response - não salva no banco, só retorna sucesso
      console.log("📧 Formulário recebido:", input);
      
      const mockResponse = {
        id: Date.now(),
        ...input,
        createdAt: new Date().toISOString()
      };
      
      res.status(201).json(mockResponse);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}

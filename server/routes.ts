import type { Express } from "express";
import type { Server } from "http";
import { api } from "../shared/routes.js";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // 1. Configuração do E-mail (Nodemailer)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Exemplo com Gmail
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Use "Senha de Aplicativo"
        },
      });

      // 2. Disparo em paralelo (E-mail + n8n Webhook)
      const emailPromise = transporter.sendMail({
        from: `"Velluxe Site" <${process.env.EMAIL_USER}>`,
        to: "lcsrcarvalho@gmail.com",
        subject: "Novo Lead - Velluxe Decor",
        html: `
          <h3>Nova solicitação de orçamento</h3>
          <p><b>Nome:</b> ${input.name}</p>
          <p><b>Telefone:</b> ${input.phone}</p>
          <p><b>Cidade:</b> ${input.city}</p>
          <p><b>E-mail:</b> ${input.email}</p>
          <p><b>Mensagem:</b> ${input.message}</p>
        `,
      });

      const webhookPromise = fetch("https://n8n-n8n.y40kn6.easypanel.host/webhook/velluxedecor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, source: "vercel_contact_form" }),
      });

      // 1. Responde o usuário IMEDIATAMENTE (Botão destrava e limpa o form)
      res.status(201).json({ message: "Solicitação enviada com sucesso!" });

      // 2. Faz o trabalho pesado em "segundo plano" (Sem o await na frente)
      Promise.all([emailPromise, webhookPromise]).catch(err => 
        console.error("Erro no envio em background:", err)
      );
    } catch (err) {
      console.error("Erro no processamento:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Erro ao enviar formulário." });
      }
    }
  });

  return httpServer;
}
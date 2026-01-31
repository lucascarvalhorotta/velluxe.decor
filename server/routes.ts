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
      
      // 1. Configuração do E-mail
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // 2. Prepara os disparos
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

      // 3. O PULO DO GATO: Espera o envio ANTES de responder a Vercel
      // Se não usar o await aqui, a Vercel desliga o servidor antes do e-mail sair
      await Promise.all([emailPromise, webhookPromise]);
      
      console.log("✅ Tudo enviado com sucesso");

      // 4. Só agora avisa o front-end que deu certo
      res.status(201).json({ message: "Solicitação enviada com sucesso!" });

    } catch (err) {
      console.error("❌ Erro detectado:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        // Se der erro no Nodemailer ou n8n, vai cair aqui e te avisar no log
        res.status(500).json({ message: "Erro ao enviar formulário. Verifique os logs." });
      }
    }
  });

  return httpServer;
}
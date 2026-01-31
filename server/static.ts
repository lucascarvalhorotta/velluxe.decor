import express, { type Express } from "express";
import path from "path";
import { fileURLToPath } from "url";

// 1. Substituição do __dirname para ES Modules (O que estava dando erro 500)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  // 2. Ajuste do caminho: A Vercel coloca o build na pasta 'public' na raiz
  // Subimos um nível (..) para sair da pasta 'server' e achar a 'public'
  const distPath = path.resolve(__dirname, "..", "public");

  // Servir arquivos estáticos (CSS, JS, Imagens)
  app.use(express.static(distPath));

  // 3. Rota "catch-all": Se não achar o arquivo, manda o index.html (SPA)
  // Mudado de "/{*path}" para "*" que é o padrão do Express
  app.get(/^(?!\/api).+/, (req, res, next) => {
    // Se a requisição for para a API, não manda o index.html
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
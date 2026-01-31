import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./static.js";
import { createServer } from "http";
import { api } from "../shared/routes.js";

export const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Helper de log simples
export function log(message: string, source = "express") {
  console.log(`${new Date().toLocaleTimeString()} [${source}] ${message}`);
}

// Middleware de Logs
app.use((req, res, next) => {
  res.on("finish", () => {
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path} ${res.statusCode}`);
    }
  });
  next();
});

// REGISTRO DAS ROTAS (Sem o async/await que trava a Vercel no topo)
registerRoutes(httpServer, app);

// Tratamento de Erros
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

// Lógica de Produção vs Dev
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
} else {
  // Em dev, o Vite é carregado dinamicamente para não quebrar a Vercel
  import("./vite.js").then(({ setupVite }) => {
    setupVite(httpServer, app);
    const port = 5173;
    httpServer.listen(port, "0.0.0.0", () => log(`🚀 Dev em http://localhost:${port}`));
  });
}

export default app;
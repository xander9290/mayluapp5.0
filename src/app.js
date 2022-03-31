import path from "path";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";
import { apps } from "open";

const app = express();

// Settings
app.set("port", 3100);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(routes.categorias);
app.use(routes.subcategorias);
app.use(routes.productos);
app.use(routes.clientes);
app.use(routes.operadores);
app.use(routes.cuentas);
app.use(routes.cajas);
app.use(routes.compuestos);

// Static Files
app.use(express.static(path.join(__dirname, "build")));

export default app;

import { Router } from "express";
import operador from "../controllers/Operador.controller";
const router = Router();

// get
router.get("/operadores", operador.getOperadores);

// create
router.post("/operadores", operador.createOperador);

// login
router.post("/operadores/login", operador.loginOperador);

// update
router.put("/operadores/:id", operador.updateOperador);

// delete
router.delete("/operadores/:id", operador.deleteOperador);

// exit
router.post("/operadores/exit", operador.exitProcess);

export default router;

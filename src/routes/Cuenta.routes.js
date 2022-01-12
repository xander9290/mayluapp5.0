import { Router } from "express";
import cuenta from "../controllers/Cuenta.controller";
const router = Router();

// get cuentas Abiertas
router.get("/cuentas/abiertas", cuenta.getCuentasAbiertas);
// get cuentas por fecha
router.get("/cuentas/porfechas/:gte/:lte", cuenta.getCuentaPorFecha);
// get cuentas por historial
router.get("/cuentas/historial/:fecha", cuenta.getCuentaHistorial);
// get cuentas cliente historial
router.get("/cuentas/cliente/:clienteId", cuenta.getCuentaClienteHistorial);

// create Cuenta
router.post("/cuentas", cuenta.createCuenta);

// update
router.put("/cuentas/:id", cuenta.updateCuenta);

export default router;

import { Router } from "express";
import caja from "../controllers/Caja.controller";
const router = Router();

// get
router.get("/caja", caja.getCajas);

// create
router.post("/caja", caja.createCaja);

// delete
router.delete("/caja/:id", caja.deleteCaja);

export default router;

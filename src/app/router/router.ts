// src/app/router/router.ts
import { Router } from "express";
import { listProducts } from "../controller/ProdutoController";

const router = Router();

// Rota para listar todos os produtos
router.get("/produto", listProducts);

export default router;

import { Router } from "express";
import { listProducts } from "../controller/ProdutoController";

const router = Router();

router.get("/produto", listProducts);

export default router;

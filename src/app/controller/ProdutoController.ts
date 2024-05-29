// src/app/controller/ProdutoController.ts
import { Request, Response } from "express";

// Simulação de dados (substitua pelo acesso ao banco de dados)
const products = [
  { id: 1, name: "Produto A" },
  { id: 2, name: "Produto B" },
  // ... outros produtos
];

export const listProducts = (req: Request, res: Response) => {
  try {
    // Consulta ao banco de dados ou uso dos dados simulados
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
};

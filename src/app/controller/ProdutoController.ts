import { Request, Response } from "express";

const products = [
  { id: 1, name: "Produto A" },
  { id: 2, name: "Produto B" },
  // ... outros produtos
];

export const listProducts = (req: Request, res: Response) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
};

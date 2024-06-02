import { Request, Response } from "express";

const products = [
  { id: 1, name: "Produto A" },
  { id: 2, name: "Produto B" },
];

/**
 * @swagger
 * /produto:
 *   get:
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Uma lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Produto A
 */
export const listProducts = (req: Request, res: Response) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
};

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getProducts = async (_:any, res:Response) => {
  try {
    const products = await prisma.products.findMany();
    res.json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

export const createProduct = async (req:Request, res:Response) => {
  try{
    const {name, price} = req.body;
    const result = await prisma.products.create({
      data:{
        name,
        price
      },
    })
    res.json(result);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

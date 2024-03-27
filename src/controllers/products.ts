import { Product } from "../module/productsModel";
import { Request, Response } from "express";


const productService = new Product();

export const getProducts = async (_:any, res:Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

export const createProduct = async (req:Request, res:Response) => {
  try{
    const {name, price} = req.body;
    const result = await productService.createProduct(name, price);
    res.json(result);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

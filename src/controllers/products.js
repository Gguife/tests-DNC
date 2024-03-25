const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const get = async (_, res) => {
  try {
    const products = await prisma.products.findMany();
    res.json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

const post = async (req, res) => {
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

module.exports = { get, post };
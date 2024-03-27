import { PrismaClient, Products } from "@prisma/client";

export class Product {
  private prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  async getAllProducts(): Promise<Products[]> {
    return this.prisma.products.findMany();
  } 

  async createProduct(name: string, price: number): Promise<Products> {
    return this.prisma.products.create({
      data: {
        name,
        price
      }
    });
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
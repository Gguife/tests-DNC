import * as express from "express";
import {getProducts, createProduct} from "../controllers/products";

const router = express.Router();

router.get('/', getProducts);
router.post('/product', createProduct);


export default router;
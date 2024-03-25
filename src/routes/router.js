const express = require("express")
const productsControler = require("../controllers/products.js");

const router = express();

router.get('/', productsControler.get);
router.post('/products', productsControler.post);


module.exports = router;
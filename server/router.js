const express = require("express");
const productController = require("./controllers/product");
const router = express.Router();

router
    .route("/products")
    .get(productController.getProducts)
    .post(productController.addProduct)
    .put(productController.updateProduct);
router
    .route("/products/:id")
    .get(productController.getProductById)
    .delete(productController.removeProduct);

module.exports = router;

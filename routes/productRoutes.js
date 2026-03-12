const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

router.post("/products", controller.addProduct);
router.get("/products", controller.getProducts);

router.get("/products/search", controller.searchProduct);
router.get("/products/category", controller.categoryFilter);

router.get("/products/:id", controller.getProductById);
router.put("/products/:id", controller.updateProduct);
router.delete("/products/:id", controller.deleteProduct);

module.exports = router;
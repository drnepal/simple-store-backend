
//importing depen and routes

const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const productsController = require("../controllers/product-controller");
// Defining all routes 
router.get("/", productsController.getAllProducts);
router.post("/", productsController.addProduct);
router.get("/:id", productsController.getById);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;

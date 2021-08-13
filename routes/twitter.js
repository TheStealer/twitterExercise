const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require("../controllers/twiter");

//categorias de productos
router.get("/tableros", productsController.tablerosIndex);
router.get("/maquinitas", productsController.maquinitasIndex);
router.get("/futbolitos", productsController.futbolitosIndex);
router.get("/accesorios", productsController.accesoriosIndex);

//vista crear producto
router.get("/create", productsController.viewCreateProduct);

//vista detalle producto
router.get("/:id", productsController.viewDetailProduct);

//vista carrilo de compra
router.get("/shoppingCart", productsController.viewShoppingCart);

//crear producto en base de datos
router.post("/", productsController.createProduct);

//vista listar productos
router.get("/", productsController.listProducts);

//vista edicion de produrcto
router.get("/:id/edit", productsController.editProduct);

//actulizar producto
router.put("/:id", productsController.updateProduct);

//eliminar producto
router.delete("/:id", productsController.deleteProduct);

module.exports = router;

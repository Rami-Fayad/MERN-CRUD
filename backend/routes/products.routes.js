const express = require ('express');
const router = express.Router();
const { getallproducts, createNewProduct, updateProduct, deleteProduct } = require('../controller/product.controller');

router.get("/",getallproducts);  
router.post("/",createNewProduct );
router.put('/:id',updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
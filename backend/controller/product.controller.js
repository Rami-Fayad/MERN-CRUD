const Product = require("../model/product.model");
const  Mongoose  = require("mongoose");

  const getallproducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log("Error in fetch Products ");
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

 const createNewProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image)
      return res
        .status(400)
        .json({ success: false, message: "Please provide all feilds" });
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res.status(201).json({ success: true, date: newProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  }

const updateProduct =  async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success : false , message : "Product not found"});
    }
    try {
        const updatedProduct =  await Product.findByIdAndUpdate(id,product, {new: true})
        res.status(200).json({success : true , data : updatedProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });  
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "product Deleted" });
    } catch (err) {
    res.status(404).json({success: false, message: "Product not found"})
    }
  }


module.exports = {deleteProduct ,createNewProduct, getallproducts, updateProduct};
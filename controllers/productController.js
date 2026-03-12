const Product = require("../models/Product");

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const data = await product.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  const data = await Product.find();
  res.json(data);
};

// Get Product By ID
exports.getProductById = async (req, res) => {
  const data = await Product.findById(req.params.id);
  res.json(data);
};

// Update Product
exports.updateProduct = async (req, res) => {
  const data = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
};

// Search by Name
exports.searchProduct = async (req, res) => {
  const name = req.query.name;
  const data = await Product.find({
    productName: { $regex: name, $options: "i" }
  });
  res.json(data);
};

// Filter by Category
exports.categoryFilter = async (req, res) => {
  const cat = req.query.cat;
  const data = await Product.find({ category: cat });
  res.json(data);
};
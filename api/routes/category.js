const Category = require('../models/Category');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

//CREATE

router.post('/', verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CATEGORiES

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ _id: -1 }).limit(6);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

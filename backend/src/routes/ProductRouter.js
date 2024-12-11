const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');

router.post('/create', ProductController.createProduct)
router.get('/get-details/:id', ProductController.getDetailsProduct)
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-all-type', ProductController.getAllType)

module.exports = router
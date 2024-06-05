const express = require('express');
const router = express.Router();

const { getAllProduct, getAllProducttest } = require("../controllers/product");

router.route("/").get(getAllProduct);
router.route("/test").get(getAllProducttest);

module.exports = router;


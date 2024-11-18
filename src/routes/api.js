const express = require('express');
const { getNearestWarehouse } = require('../controllers/warehouseController');
const { calculateShippingCharge } = require('../controllers/shippingController');

const router = express.Router();

router.get('/nearest-warehouse', getNearestWarehouse);
router.post('/calculate-shipping', calculateShippingCharge);

module.exports = router;

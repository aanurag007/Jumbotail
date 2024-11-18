const Product = require('../models/Product');
const { calculateDistance } = require('../services/distanceService');

exports.calculateShippingCharge = async (req, res) => {
   try {
       const { productId, customerLat, customerLng, deliverySpeed } = req.body;

       const product = await Product.findById(productId);
       const distance = calculateDistance(
           product.location.lat, product.location.lng,
           customerLat, customerLng
       );

       let ratePerKm = 3; // Default: Mini Van
       if (distance > 100) ratePerKm = 2; // Truck
       if (distance > 500) ratePerKm = 1; // Aeroplane

       const shippingCharge = distance * ratePerKm * product.weight;
       const totalCharge = deliverySpeed === 'express'
           ? shippingCharge + 1.2 * product.weight
           : shippingCharge;

       res.status(200).json({ shippingCharge: totalCharge });
   } catch (error) {
       res.status(500).json({ error: 'Internal Server Error' });
   }
};

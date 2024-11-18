const Warehouse = require('../models/Warehouse');
const { calculateDistance } = require('../services/distanceService');

exports.getNearestWarehouse = async (req, res) => {
   try {
       const { lat, lng } = req.query;

       const warehouses = await Warehouse.find();
       let nearestWarehouse = null;
       let minDistance = Infinity;

       warehouses.forEach((warehouse) => {
           const distance = calculateDistance(
               lat, lng,
               warehouse.location.lat, warehouse.location.lng
           );

           if (distance < minDistance) {
               minDistance = distance;
               nearestWarehouse = warehouse;
           }
       });

       res.status(200).json(nearestWarehouse);
   } catch (error) {
       res.status(500).json({ error: 'Internal Server Error' });
   }
};

const request = require('supertest');
const app = require('../server');

describe('Shipping APIs', () => {
    it('should return nearest warehouse', async () => {
        const res = await request(app).get('/api/v1/nearest-warehouse?lat=12.0&lng=77.0');
        expect(res.status).toBe(200);
    });

    it('should calculate shipping charge', async () => {
        const res = await request(app).post('/api/v1/calculate-shipping').send({
            productId: '12345',
            customerLat: 12.0,
            customerLng: 77.0,
            deliverySpeed: 'express',
        });
        expect(res.status).toBe(200);
    });
});

import request from "supertest";
import server from "../../server";

describe('POST /api/products', () => {
    it('status 201 & product created', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Testing product name',
            price: 123,
        })
        .send({
            name: 'product name',
            price: 123,
            stock: 10
        });
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('data');

        expect(response.status).not.toBe(200);
        expect(response.status).not.toBe(404);
        expect(response.body).not.toHaveProperty('error');
    });
});
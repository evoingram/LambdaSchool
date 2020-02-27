const request = require('supertest');

const server = require('../api/server.js');

describe('cohorts router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	describe('GET /', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
	});

	it('should return cohorts as the router value', function() {
		return request(server)
			.get('/api/cohorts')
			.then(res => {
				expect(res.body.router).toBe('cohorts');
			});
	});

	it('should return JSON-formatted body', function() {
		return request(server)
			.get('/api/cohorts')
			.then(res => {
				expect(res.type).toMatch(/json/i);
			});
	});

	it('should return cohorts as the router value async version', async function() {
		const res = await request(server).get('/api/cohorts');
		expect(res.body.router).toBe('cohorts');
	});
});

describe('server', function() {
	describe('environment', function() {
		it('should use testing environment', function() {
			expect(process.env.DB_ENV).toBe('development');
		});
	});
});

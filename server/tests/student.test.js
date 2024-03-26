const request = require('supertest');
const init = require('../app');
const mongoose = require('mongoose');
const { Student } = require('../models');

let app;

const testStudent = {
    _id: "12345",
    name: 'John Doe',
    age: 20
}

beforeAll(async () => {
    app = await init();
    await Student.deleteMany();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Student', () => {
    test('test student get', async () => {
        const response = await request(app).get('/student');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual([]);

    })

    // test the post student api
    test('test student post', async () => {
        const response = await request(app)
            .post('/student')
            .send(testStudent);

        expect(response.statusCode).toEqual(201);
        expect(response.body.name).toEqual(testStudent.name);
        expect(response.body.age).toEqual(testStudent.age);
        expect(response.body._id).toEqual(testStudent._id);
    });

    //test the student api
    test('test student get by id', async () => {
        const response = await request(app).get('/student/12345');
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual(testStudent.name);
        expect(response.body.age).toEqual(testStudent.age);
        expect(response.body._id).toEqual(testStudent._id);
    });
});
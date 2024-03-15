const express = require('express');
const { studentController } = require('../controllers');
const studentRoute = express.Router();

//get
studentRoute.get('/', studentController.getStudents);
studentRoute.get('/:id', studentController.getStudent);

//put
studentRoute.put('/', studentController.putStudent);

//post
studentRoute.post('/', studentController.postStudent);

//delete
studentRoute.delete('/:id', studentController.deleteStudent);

module.exports = studentRoute;
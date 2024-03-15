const { Student } = require('../models');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const postStudent = async (req, res) => {
    const student = req.body;

    try {
        const createdStudent = await Student.create(student);
        res.status(201).json(createdStudent);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const putStudent = async (req, res) => {
    const student = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            student._id,
            student,
            { new: true }
        );
        res.status(201).json(updatedStudent);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.status(200).send('Student deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }

};

module.exports = { getStudents, getStudent, postStudent, putStudent, deleteStudent };
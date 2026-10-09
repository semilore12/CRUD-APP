const studentModel = require("../models/studentModel");

// READ
const getStudents = async (req, res) => {
    const students = await studentModel.getAllStudents();
    res.render("students", { students });
};

// CREATE
const createStudent = async (req, res) => {
    const { name, email, age, course } = req.body;

    await studentModel.createStudent(name, email, age, course);

    res.redirect("/students");
};

// UPDATE
const updateStudent = async (req, res) => {
    const { name, email, age, course } = req.body;
    const { id } = req.params;

    await studentModel.updateStudent(id, name, email, age, course);

    res.redirect("/students");
};

// DELETE
const deleteStudent = async (req, res) => {
    const { id } = req.params;

    await studentModel.deleteStudent(id);

    res.redirect("/students");
};

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
};
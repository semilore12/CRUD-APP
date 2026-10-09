const express = require("express");

const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", createStudent);
router.post("/students/update/:id", updateStudent);
router.get("/students/delete/:id", deleteStudent);

module.exports = router;
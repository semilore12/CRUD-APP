const db = require("../config/database");
const getAllStudents = async () => {
    const [students] = await db.query("SELECT * FROM students");
    return students;
};
const createStudent = async (name, email, age, course) => {
    const [result] = await db.query(
        "INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)",
        [name, email, age, course]
    );

    return result;
};
const updateStudent = async (id, name, email, age, course) => {
    const [result] = await db.query(
        "UPDATE students SET name = ?, email = ?, age = ?, course = ? WHERE id = ?",
        [name, email, age, course, id]
    );

    return result;
};
const deleteStudent = async (id) => {
    const [result] = await db.query(
        "DELETE FROM students WHERE id = ?",
        [id]
    );

    return result;
};
module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
};

const express = require("express");
const db = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", studentRoutes);

app.get("/", (req, res) => {
    res.redirect("/students");
});

app.listen(3000, async () => {
    console.log("Server running on port 3000");

    try {
        await db.query("SELECT 1");
        console.log("MySQL connected successfully");
    } catch (error) {
        console.log("MySQL connection failed");
        console.log(error.message);
    }
});
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Nexora Backend is running!");
});

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database error");
        }

        res.json(results);
    });
});

app.post("/signup", (req, res) => {

    const { Username, email, password_hash } = req.body;

    const sql = `
        INSERT INTO users (Username, email, password_hash)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [Username, email, password_hash],
        (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Failed to create user"
                });
            }

            res.json({
                message: "User created successfully",
                userId: result.insertId
            });
        }
    );
});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = `
        SELECT * FROM users
        WHERE email = ? AND password_hash = ?
    `;

    db.query(
        sql,
        [email, password],
        (err, results) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Database error"
                });
            }

            if (results.length === 0) {
                return res.status(401).json({
                    message: "Incorrect email or password"
                });
            }

            res.json({
                message: "Login successful"
            });
        }
    );
});

app.listen(5000, () => {
    console.log("Nexora Backend running on port 5000");
});
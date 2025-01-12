const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todo_db",
    password: "Balramgupta@99",
    port: 4000,
});

app.use(cors());
app.use(bodyParser.json());

// Create the tasks table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE
    )
`);

// Fetch all tasks
app.get("/tasks", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks");
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add a new task
app.post("/tasks", async (req, res) => {
    const { content } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO tasks (content) VALUES ($1) RETURNING *",
            [content]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update task completion
app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        await pool.query("UPDATE tasks SET completed = $1 WHERE id = $2", [
            completed,
            id,
        ]);
        res.send("Task updated successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
        res.send("Task deleted successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

const express = require("express");
const app = express();

app.use(express.json());
let todos = [];

app.get("/", (req, res) => {
  res.json(todos);
});

app.post("/", (req, res) => {
  todos.push({
    id: Math.floor(Math.random() * 100),
    task: req.body.task,
    done: false,
  });

  res.json({
    todos: todos,
  });
});

app.post("/", (req, res) => {
  todos.push({
    id: Math.floor(Math.random() * 100),
    task: req.body.task,
    done: false,
  });

  res.json({
    todos: todos,
  });
});

app.put("/", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.body.id));
  todos[todoIndex].task = req.body.task;

  res.json({
    todos: todos,
  });
});

app.delete("/", (req, res) => {
  const filteredTodos = todos.filter((t) => t.id !== parseInt(req.body.id));
  todos = [...filteredTodos];
  res.json({
    todos: todos,
  });
});

app.listen(3000);

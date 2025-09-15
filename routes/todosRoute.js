const express = require('express');
const router = express.Router();

let todos = [];

// Get all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// Create a new todo
router.post('/', (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.text = req.body.text !== undefined ? req.body.text : todo.text;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Delete a todo
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

module.exports = router;
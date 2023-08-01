const router = require('express').Router();
const { Todo } = require('../db').models;

// GET /api/todos
router.get('/', async (req, res, next) => {
  try {
    res.send(await Todo.findAll());
  } catch (error) {
    next(error);
  }
});

// GET /api/todos/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Todo.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// POST /api/todos
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Todo.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/todos/:id
router.put('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const todo_controller = require('../controller/todoController');

router.post('/add', todo_controller.todo_add);
router.post('/update', todo_controller.todo_update);
router.post('/remove', todo_controller.todo_remove);

module.exports = router;
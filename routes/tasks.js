const express = require('express');
const router = express.Router();

const { createTask,
    getTasks,
    updateTask,
    deleteTask,
    showId } = require('../controller/todoController');
const authentication = require('../middleware/authentication');

// Routes
router.get('', authentication, getTasks);
router.post('/create', authentication, createTask);
router.get('/:id/show', authentication, showId);
router.patch('/:id/update', authentication, updateTask);
router.delete('/:id/delete', authentication, deleteTask);

module.exports = router;
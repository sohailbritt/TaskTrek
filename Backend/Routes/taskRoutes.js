const taskController =require('../controllers/taskController');
const express = require('express');
const router = express.Router();


//         { id: 1, task: 'Walk the dog', isCompleted: true },
//         { id: 2, task: 'Buy groceries', isCompleted: false },
//         { id: 3, task: 'Read a book', isCompleted: true },
//         { id: 4, task: 'Clean the house', isCompleted: false },
//         { id: 5, task: 'Cook dinner', isCompleted: true },
//         { id: 6, task: 'Exercise', isCompleted: false },
//         { id: 7, task: 'Attend meeting', isCompleted: true },
//         { id: 8, task: 'Fix the car', isCompleted: false },
//         { id: 9, task: 'Write a report', isCompleted: true },
//         { id: 10, task: 'Call a friend', isCompleted: false }]


// get all task
router.get('/tasks', taskController.getAllTask);

//get single task
router.get('/task/:id', taskController.getSingleTask);

// update single task
router.put('/task/:id', taskController.updateTask);

// create single task
router.post('/task', taskController.createTask);

// delete single task
router.delete('/task/:id', taskController.deleteTask);


module.exports = router;
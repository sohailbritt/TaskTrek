const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    tasks: [{
        id: String,
        task: String,
        isCompleted: Boolean
    }]
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
const Task = require('../models/taskModel.js');

const createTask = async (req, res) => {

    try {
        const { id, task, isCompleted } = req.body;

        // Find the first (or only) document in the collection
        let taskDocument = await Task.findOne();

        // If no document exists, create a new one with an empty tasks array
        if (!taskDocument) {
            taskDocument = new Task({ tasks: [] });
        }

        // Push the new task into the tasks array
        taskDocument.tasks.push({ id, task, isCompleted });

        // Save the updated document
        await taskDocument.save();

        // Respond with the updated tasks array
        res.status(201).json(taskDocument);

    } catch (err) {
        console.error('Error adding task:', err);
        res.status(500).json({ error: 'Task creation failed', details: err.message });
    }
};



const getAllTask = async(req, res) => {
    try {
       const allTask =  await Task.find();
       res.status(200).json(allTask);
    }
    catch(err) {
       res.status(500).json('fetching all task failed')
    }
}

const getSingleTask = async (req, res) => {
    try {
        const taskId = parseInt(req.params.id, 10);

        // Find the document containing the task with the specific `id`
        const taskDocument = await Task.findOne({ 'tasks.id': taskId });

        if (!taskDocument) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Find the specific task within the `tasks` array
        const task = taskDocument.tasks.find(task => task.id === taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const updateTask = async (req, res) => {
    try {
        const { task, isCompleted } = req.body;
        const taskId = parseInt(req.params.id, 10);

        // Find the document containing the task with the specific `id` and update it
        const updatedTaskDocument = await Task.findOneAndUpdate(
            { 'tasks.id': taskId },
            {
                $set: {
                    'tasks.$.task': task,
                    'tasks.$.isCompleted': isCompleted
                }
            },
            { new: true }  // Return the updated document
        );

        if (!updatedTaskDocument) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Extract the updated task
        const updatedTask = updatedTaskDocument.tasks.find(task => task.id === taskId);

        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update this specific task' });
    }
};


const deleteTask = async (req, res) => {
    try {
        const taskId = parseInt(req.params.id, 10);

        // Find the document containing the task and remove the task with the specific `id`
        const updatedTaskDocument = await Task.findOneAndUpdate(
            { 'tasks.id': taskId },
            {
                $pull: { tasks: { id: taskId } }  // Remove the task with the matching id
            },
            { new: true }  // Return the updated document
        );

        if (!updatedTaskDocument) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task successfully deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete this specific task' });
    }
};


module.exports = {
    createTask,
    getAllTask,
    getSingleTask,
    updateTask,
    deleteTask
}
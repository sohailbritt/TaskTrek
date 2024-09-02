

const createTask = async(data) => {
    const options = {
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
    const postData = await fetch('http://localhost:4000/api/task', options);
    const result  = await postData.json();
    return result;
}

const deleteTask = async(id) => {
    const allTask = await fetch('http://localhost:4000/api/task/' + id, {
        method: 'DELETE',
      });
    const result = await allTask.json();
    return result;
}

const getAllTask = async() => {
    const allTask = await fetch('http://localhost:4000/api/tasks');
    const result = await allTask.json();
    return result;
}

const updatingTask = async(id, data) => {
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
  const updatedTask = await fetch('http://localhost:4000/api/task/' + id , options);
  const result = await updatedTask.json();
  return result;
}

module.exports= {
    getAllTask, createTask, deleteTask, updatingTask
}
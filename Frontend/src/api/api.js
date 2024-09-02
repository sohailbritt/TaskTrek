const apiUrl = import.meta.env.VITE_APP_URL;

export const createTask = async(data) => {
    const options = {
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
    const postData = await fetch(apiUrl + '/api/task', options);
    const result  = await postData.json();
    return result;
}

export const deleteTask = async(id) => {
    const allTask = await fetch( apiUrl + '/api/task/' + id, {
        method: 'DELETE',
      });
    const result = await allTask.json();
    return result;
}

export const getAllTask = async() => {
    const allTask = await fetch(apiUrl + '/api/tasks');
    const result = await allTask.json();
    return result;
}

export const updatingTask = async(id, data) => {
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
  const updatedTask = await fetch(apiUrl + '/api/task/' + id , options);
  const result = await updatedTask.json();
  return result;
}

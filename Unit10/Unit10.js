// Task 1

const postNote = async () => {
    const response = await fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 1,
            note: 'learn javascript',
            completed: false,
        }),
    });
    console.log(response);
};

// Task 2

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data.filter((data) => data.id % 2 === 0));
};

// Task 3

const postNewUser = async (login, password) => {
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    });
    console.log(response);
};

// Task 4

const addTodo = async (id, task) => {
    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            task: task,
            completed: false,
        }),
    });
    console.log(response);
};

const deleteTodo = async (id) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
    });
    console.log(response);
};

const setCompleteTodo = async (id) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: true }),
    });
    console.log(response);
};

const changeTodoTask = async (id, newTask) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
    });
    console.log(response);
};

const listCompletedTodos = async () => {
    const response = await fetch('http://localhost:3000/todos?completed=true');
    const data = await response.json();
    console.log(data);
};

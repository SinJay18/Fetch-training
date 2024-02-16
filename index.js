const todosContainer = document.querySelector('.container');
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
    fetch(todosUrl)
        .then(response => response.json())
        .then(data => printTodos(data));
}

function printTodos(todos){
    const todosList = document.createElement('ul');
    
    todos.forEach(todoItem => {
        const todosListItemId = document.createElement('span');
        const todosListItem = document.createElement('li');

        todosListItemId.textContent = todoItem.id;
        todosListItem.textContent = todoItem.title;

        todosList.append(todosListItem);
        todosListItem.prepend(todosListItemId);
    });

    todosContainer.append(todosList);
}

getTodos();
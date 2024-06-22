document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(listItem, taskSpan));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(listItem));

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    taskInput.focus();
}

function editTask(listItem, taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(listItem) {
    listItem.remove();
}

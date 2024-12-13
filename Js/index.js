// index.js

import { fetchTasks } from './dataHandler.js';
import { displayTasks, addTask } from './todoFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addTodo');
  const todoInput = document.getElementById('todoInput');

  // Fetch and display tasks when the page loads
  fetchTasks().then(data => {
    const tasks = data.tasks || [];
    displayTasks(tasks); // Display existing tasks in the list

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', () => {
      const taskName = todoInput.value;
      addTask(taskName, tasks);
      todoInput.value = ''; // Clear input field
    });
  });
});


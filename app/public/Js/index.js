import { fetchTasks, saveTasks } from './dataHandler.js';
import { displayTasks, addTask } from './todoFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("index.js loaded");

  const addButton = document.getElementById('addTodo');  // Changed to match HTML
  const todoInput = document.getElementById('todoInput');  // Changed to match HTML
  const todoList = document.getElementById('todoList');  // Make sure todoList is correct

  let tasks = [];

  // Fetch and display tasks when the page loads
  fetchTasks()
    .then(data => {
      tasks = data.tasks || [];  // Ensure data.tasks is the correct format from your JSON
      displayTasks(tasks, todoList); // Display existing tasks in the list
    })
    .catch(error => {
      console.error("Error loading tasks:", error);
      todoList.innerHTML = `<li>Error loading tasks. Please try again later.</li>`;
    });

  // Add task when the "Add" button is clicked
  addButton.addEventListener('click', () => {
    const taskName = todoInput.value.trim(); // Trim to remove extra spaces

    // Validate input
    if (taskName === '') {
      alert('Task name cannot be empty!');
      return;
    }

    // Add task to the tasks array
    addTask(taskName, tasks, todoList);

    // Clear the input field
    todoInput.value = '';
  });
});

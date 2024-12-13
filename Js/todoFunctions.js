// todoFunctions.js


import { fetchTasks, saveTasks } from './dataHandler.js';

// Function to display tasks in the list
function displayTasks(tasks) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';  // Clear the list before displaying the tasks

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;

    if (task.checked) {
      li.classList.add('checked');
    }

    // Create a close button for each task
    const span = document.createElement('SPAN');
    const txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    // Mark as checked when clicked
    li.addEventListener('click', () => {
      li.classList.toggle('checked');
      task.checked = li.classList.contains('checked');
      saveTasks(tasks); // Save the updated tasks to JSON
    });

    // Remove task when close button is clicked
    span.addEventListener('click', () => {
      li.remove();
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1); // Remove the task from the array
      }
      saveTasks(tasks); // Save the updated tasks to JSON
    });

    todoList.appendChild(li);
  });
}

// Function to add a new task
function addTask(taskName, tasks) {
  if (taskName.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const newTask = { name: taskName, checked: false };
  tasks.push(newTask); // Add the new task to the array
  saveTasks(tasks);    // Save updated tasks to the JSON
  displayTasks(tasks); // Re-render the list with the new task
}

// Export functions to be used in main.js
export { displayTasks, addTask };

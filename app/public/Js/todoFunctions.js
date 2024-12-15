import { saveTasks } from './dataHandler.js';

// Function to display tasks in the list
function displayTasks(tasks, todoList) {
  todoList.innerHTML = '';  // Clear the list before displaying the tasks

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (task.completed) {
      li.classList.add('checked');
    }

    // Task text
    const taskText = document.createElement('span');
    taskText.textContent = task.name;
    li.appendChild(taskText);

    // Create a close button for each task
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.classList.add('close');
    li.appendChild(closeBtn);

    // Create an edit button for each task
    const editBtn = document.createElement('span');
    editBtn.textContent = '✎'; // You can use an edit icon or symbol
    editBtn.classList.add('edit-btn');
    li.appendChild(editBtn);

    // Mark task as checked when clicked
    li.addEventListener('click', () => {
      li.classList.toggle('checked');
      task.completed = li.classList.contains('checked');
      saveTasks(tasks); // Save updated tasks to JSON
    });

    // Remove task when close button is clicked
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();  // Prevent triggering the "click" event on the list item
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1); // Remove task from the array
      }
      saveTasks(tasks); // Save updated tasks to JSON
      displayTasks(tasks, todoList); // Re-render the list
    });

    // Edit task when edit button is clicked
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();  // Prevent triggering the "click" event on the list item
      const newTaskName = prompt("Edit your task:", task.name); // Prompt user for new task name

      if (newTaskName && newTaskName.trim() !== '') {
        task.name = newTaskName.trim(); // Update task name
        saveTasks(tasks); // Save updated tasks to JSON
        displayTasks(tasks, todoList); // Re-render the list
      }
    });

    todoList.appendChild(li);
  });
}

// Function to add a new task
function addTask(taskName, tasks, todoList) {
  if (taskName.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task object
  const newTask = { name: taskName, completed: false };
  tasks.push(newTask);  // Add the new task to the array

  // Save updated tasks to the JSON
  saveTasks(tasks);

  // Re-render the task list
  displayTasks(tasks, todoList);
}

// Export functions to be used in main.js
export { displayTasks, addTask };


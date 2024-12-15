// dataHandler.js

// dataHandler.js

// Fetch data from tasks.json or fallback to localStorage if unavailable
function fetchTasks() {
  return fetch('/app/public/data/tasks.json') // This assumes the server serves the data folder correctly
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching tasks. Using localStorage as fallback:", error);
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? { tasks: JSON.parse(savedTasks) } : { tasks: [] };
    });
}

// Save updated tasks to localStorage
function saveTasks(tasks) {
  console.log("Saving tasks...", tasks); // For debugging purposes

  // Save tasks to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Export functions to be used in other files
export { fetchTasks, saveTasks };

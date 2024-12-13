// dataHandler.js

// Fetch data from tasks.json
function fetchTasks() {
  return fetch('/data/tasks.json') // This assumes the server serves the data folder correctly
    .then(response => response.json())
    .catch(error => console.error("Error fetching tasks:", error));
}


  
  // Save updated tasks to tasks.json (you'll likely need a back-end for this in a real app)
  // In this case, we will just simulate saving the data.
  function saveTasks(tasks) {
    console.log("Saving tasks...", tasks); // This is just for debugging purposes
  
    // Here you'd normally send the updated tasks array to a server or save in browser storage.
    // For now, we are just going to simulate this with a log to console.
  }
  
  // Export functions to be used in other files
  export { fetchTasks, saveTasks };
  
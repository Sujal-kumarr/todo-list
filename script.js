const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


// Add a new task
addButton.addEventListener("click", addTask);


// Allow pressing Enter to add a task
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function addTask() {

    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === "") {
        return;
    }


    // Create list item
    const taskItem = document.createElement("li");

    taskItem.classList.add("task");


    // Create task text
    const taskTextElement = document.createElement("span");

    taskTextElement.classList.add("task-text");

    taskTextElement.textContent = taskText;


    // Complete task when clicked
    taskTextElement.addEventListener("click", function () {

        taskTextElement.classList.toggle("completed");

    });


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");


    // Delete task
    deleteButton.addEventListener("click", function () {

        taskItem.remove();

    });


    // Add elements to task item
    taskItem.appendChild(taskTextElement);

    taskItem.appendChild(deleteButton);


    // Add task to list
    taskList.appendChild(taskItem);


    // Clear input
    taskInput.value = "";

    taskInput.focus();
}

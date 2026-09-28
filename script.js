const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const filterButtons = document.querySelectorAll(".filter");


// Get tasks from Local Storage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// Display existing tasks when page loads

displayTasks();


// Add task when button is clicked

addButton.addEventListener("click", addTask);


// Add task when Enter key is pressed

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// Add a new task

function addTask() {

    const text = taskInput.value.trim();

    const date = taskDate.value;

    const time = taskTime.value;


    // Don't allow empty tasks

    if (text === "") {

        alert("Please enter a task.");

        return;

    }


    // Create task object

    const task = {

        id: Date.now(),

        text: text,

        date: date,

        time: time,

        completed: false

    };


    // Add task to array

    tasks.push(task);


    // Save tasks

    saveTasks();


    // Display tasks

    displayTasks();


    // Clear input fields

    taskInput.value = "";

    taskDate.value = "";

    taskTime.value = "";


    taskInput.focus();

}


// Display tasks

function displayTasks() {

    taskList.innerHTML = "";


    // Filter tasks

    let filteredTasks = tasks;


    if (currentFilter === "pending") {

        filteredTasks = tasks.filter(function (task) {

            return !task.completed;

        });

    }


    if (currentFilter === "completed") {

        filteredTasks = tasks.filter(function (task) {

            return task.completed;

        });

    }


    // Show empty message

    if (filteredTasks.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.classList.add("empty-message");

        emptyMessage.textContent = "No tasks found.";

        taskList.appendChild(emptyMessage);

        return;

    }


    // Create each task

    filteredTasks.forEach(function (task) {

        const taskItem = document.createElement("li");

        taskItem.classList.add("task");


        // Add completed class

        if (task.completed) {

            taskItem.classList.add("completed");

        }


        // Checkbox

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.classList.add("task-checkbox");

        checkbox.checked = task.completed;


        checkbox.addEventListener("change", function () {

            toggleTask(task.id);

        });


        // Task content

        const taskContent = document.createElement("div");

        taskContent.classList.add("task-content");


        // Task text

        const taskText = document.createElement("div");

        taskText.classList.add("task-text");

        taskText.textContent = task.text;


        // Date and time

        const taskDetails = document.createElement("div");

        taskDetails.classList.add("task-details");


        if (task.date || task.time) {

            let details = "";

            if (task.date) {

                details += "📅 " + task.date;

            }

            if (task.time) {

                details += "  ⏰ " + task.time;

            }

            taskDetails.textContent = details;

        }


        taskContent.appendChild(taskText);

        taskContent.appendChild(taskDetails);


        // Delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-button");


        deleteButton.addEventListener("click", function () {

            deleteTask(task.id);

        });


        // Add everything to task item

        taskItem.appendChild(checkbox);

        taskItem.appendChild(taskContent);

        taskItem.appendChild(deleteButton);


        // Add task to list

        taskList.appendChild(taskItem);

    });

}


// Complete / uncomplete task

function toggleTask(id) {

    tasks = tasks.map(function (task) {

        if (task.id === id) {

            task.completed = !task.completed;

        }

        return task;

    });


    saveTasks();

    displayTasks();

}


// Delete task

function deleteTask(id) {

    tasks = tasks.filter(function (task) {

        return task.id !== id;

    });


    saveTasks();

    displayTasks();

}


// Save tasks to Local Storage

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// Filter buttons

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class

        button.classList.add("active");


        // Change current filter

        currentFilter = button.dataset.filter;


        // Display filtered tasks

        displayTasks();

    });

});

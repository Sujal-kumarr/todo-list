const input = document.querySelector("input");
const addButton = document.querySelector("button");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    taskList.appendChild(task);

    input.value = "";
});

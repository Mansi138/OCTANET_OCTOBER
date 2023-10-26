document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("add");
    const taskList = document.getElementById("taskList");

    // Add a new task
    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addDeleteButton(taskItem);
        }
    });

    // Adding  delete buttons to all the tasks
    function addDeleteButton(taskItem) {
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);
    }

    // press enter key to add the different tasks
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addBtn.click();
        }
    });
});

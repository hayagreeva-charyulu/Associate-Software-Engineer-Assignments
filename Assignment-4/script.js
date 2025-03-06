// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item (li)
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append delete button to list item
    listItem.appendChild(deleteBtn);

    // Append list item to the task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
}

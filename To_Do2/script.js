const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fetch tasks from the server and display them
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    listContainer.innerHTML = ""; // Clear the list
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = task.content;
        li.classList.toggle("checked", task.completed);
        li.dataset.id = task.id;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

// Add a new task
async function addTask() {
    if (inputbox.value === "") {
        alert("You must write something!");
    } else {
        const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: inputbox.value }),
        });
        inputbox.value = "";
        fetchTasks();
    }
}

// Handle task clicks (toggle completion or delete)
listContainer.addEventListener("click", async function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;

    if (e.target.tagName === "LI") {
        const isChecked = li.classList.toggle("checked");
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: isChecked }),
        });
    } else if (e.target.tagName === "SPAN") {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE",
        });
        fetchTasks();
    }
});

inputbox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Load tasks on page load
fetchTasks();

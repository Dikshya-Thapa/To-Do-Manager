let tasks = [
  { id: 1, title: "Wireframe Design", dueDate: "2025-06-01", priority: "High", status: "Pending" },
  { id: 2, title: "Landing Page", dueDate: "2025-06-01", priority: "Medium", status: "Pending" },
];

function renderTasks() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  tasks.forEach(task => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${task.title}</td>
      <td>${task.dueDate}</td>
      <td>${task.priority}</td>
      <td>${task.status}</td>
      <td class="actions">
        <button title="Edit" onclick="editTask(${task.id})">✏️</button>
        <button title="Delete" onclick="deleteTask(${task.id})">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function createTask() {
  const title = prompt("Enter task title:");
  if (!title) return;

  const dueDate = prompt("Enter due date (YYYY-MM-DD):", "2025-06-01");
  const priority = prompt("Enter priority (Low, Medium, High):", "Medium");
  const status = prompt("Enter status (Pending, Completed):", "Pending");

  const newTask = {
    id: Date.now(),
    title,
    dueDate,
    priority,
    status,
  };

  tasks.push(newTask);
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const newTitle = prompt("Edit title:", task.title);
  const newDueDate = prompt("Edit due date (YYYY-MM-DD):", task.dueDate);
  const newPriority = prompt("Edit priority:", task.priority);
  const newStatus = prompt("Edit status:", task.status);

  task.title = newTitle;
  task.dueDate = newDueDate;
  task.priority = newPriority;
  task.status = newStatus;

  renderTasks();
}

function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  const createButton = document.querySelector(".search-section button");
  if (createButton) {
    createButton.addEventListener("click", createTask);
  }
});

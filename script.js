let input = document.querySelector("input");
let button = document.querySelector("button");
let ol = document.querySelector("ol");

window.addEventListener("load", function() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToList(task));
});

button.addEventListener("click", function() {
  if (input.value.trim() === "") return;
  addTaskToList(input.value);
  saveTasks();
  input.value = "";
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (input.value.trim() === "") return;
    addTaskToList(input.value);
    saveTasks();
    input.value = "";
  }
});

function addTaskToList(taskText) {
  let li = document.createElement("li");
  li.innerHTML = `${taskText} <a class="delete"><i class="fa-solid fa-trash"></i></a>`;
  ol.appendChild(li);

  li.querySelector(".delete").addEventListener("click", function() {
    li.remove();
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("ol li").forEach(li => {
    tasks.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


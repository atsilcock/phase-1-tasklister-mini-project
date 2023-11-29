document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  const taskDescription = document.getElementById("new-task-description").value;
  console.log("Task Description:", taskDescription);

});
});

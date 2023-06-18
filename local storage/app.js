// localstorage
//setItem
// localStorage.setItem('hareket','burpee');
// localStorage.setItem('tekrar',50);
//get Item
// const value =localStorage.getItem('tekrar');
// console.log(value);
// console.log(typeof value);

//clear localstorage
//localStorage.clear();

//clear localstorage
// localStorage.setItem('hareket','burpee');
// localStorage.setItem('tekrar',50);
//console.log(localStorage.getItem('sport'))
// if (localStorage.getItem("tekrar") === null) {
//   console.log("the data you are querying doesnot exist");
// } else {
//   console.log("data found ");
// }

//local storage Array

// const todos = ["todo 1", "todo 2", "todo 3"];
// //localStorage.setItem('todos',todos);

// localStorage.setItem("todos", JSON.stringify(todos));
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value)

const form = document.getElementById("todo-form");
const todoinput = document.getElementById("todo");
form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value;
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    tados = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));
  e.preventDefault();
}

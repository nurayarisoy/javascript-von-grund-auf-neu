//tum elementleri secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const toduList = document.querySelector(".list-group");
const firstCardBody = documnt.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const fiter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();
function eventListener() {
  //tum eventlistener
  form.addEventListener("submit", addTodo);
}
function addTodo(e) {
  const newTodo = todoInput.value.trim();//trim string deki ile bastaki ve sondaki bosluklari siliyorsun
  addTodoToUI(newTodo); //dinamik olarak todo elementini ekliyorsun
  e.preventDefault();
}
function addTodoToUI(newTodo) {
  //string degerine list item olarak UI eklemek

  //  //<!-- <li class="list-group-item d-flex justify-content-between">
  //  Todo 1
  //  <a href = "#" class ="delete-item">
  // {/* <i class = "fa fa-remove"></i> */}
  //{/* </a> */}
  // </li>-->

  //list Item olustirma
  const listItem = document.createElement("li");

  //linl olusturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class ='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  //text node ekleme
  listItem.appendChild(document.createElementTextNode(newTodo));
  listItem.appendChild(link);
  //todolist List Item eklem
  todoList.appendChild(listItem);
  todoInput.value = ""; //busekide input icinde yazilansilinir
}

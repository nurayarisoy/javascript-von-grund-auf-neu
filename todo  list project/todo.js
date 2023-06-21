// //tum elementleri secme
// const form = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo");
// const toduList = document.querySelector(".list-group");
// const firstCardBody = documnt.querySelector(".card-body")[0];
// const secondCardBody = document.querySelector(".card-body")[1];
// const fiter = document.querySelector("#filter");
// const clearButton = document.querySelector("#clear-todos");

// eventListener();
// function eventListener() {
//   //tum eventlistener
//   form.addEventListener("submit", addTodo);
// }
// function addTodo(e) {
//   const newTodo = todoInput.value.trim(); //trim string deki ile bastaki ve sondaki bosluklari siliyorsun
//   if (newTodo === "") {
//     // eger bos gelirse alert mesage olusuturur
//     // </div>
//     // <div class="alert alert-danger" role="alert">
//     //{/* This is a danger alert—check it out! */}
//     //{/* </div> */}
//     schowAlert("danger", "please enter todo");
//   } else {
//     addTodoToUI(newTodo); //dinamik olarak todo elementini ekliyorsuninputa birse yazmasakta bos olarak todo olusuyor. bunu engelemek icin
//   }

//   e.preventDefault();
// }
// function showAlert(type,message){
// const alert = document.createElement('div')
//    alert.className =`alert alert-${type}`;
//    alert.textContent= message;
//    console.log(alert)

// }
// function addTodoToUI(newTodo) {
//   //string degerine list item olarak UI eklemek

//   //  //<!-- <li class="list-group-item d-flex justify-content-between">
//   //  Todo 1
//   //  <a href = "#" class ="delete-item">
//   // {/* <i class = "fa fa-remove"></i> */}
//   //{/* </a> */}
//   // </li>-->

//   //list Item olustirma
//   const listItem = document.createElement("li");

//   //linl olusturma
//   const link = document.createElement("a");
//   link.href = "#";
//   link.className = "delete-item";
//   link.innerHTML = "<i class ='fa fa-remove'></i>";
//   listItem.className = "list-group-item d-flex justify-content-between";
//   //text node ekleme
//   listItem.appendChild(document.createElementTextNode(newTodo));
//   listItem.appendChild(link);
//   //todolist List Item eklem
//   todoList.appendChild(listItem);
//   todoInput.value = ""; //busekide input icinde yazilansilinir
// }
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI); //burda local storage todo lari Ui da gostermek icin DOMcontentloaded
  secondCardBody.addEventListener("click", deleteTodo); //Ui silmek
}
function deleteTodo(e) {
  //burdada Ui todolari simek cagirdik

  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent); //todo stosage silme
    showAlert("success", "todo success delete");
  }
}
function deleteTodoFromStorage(deletetodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1); //arayden degeri silebilirsin
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
  // local storage Ui Cagirdik
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Please enter a todo");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo); // burda Ui eklemistik simdi localstorage ekliyoruz buna functinda yaziyoruz
    showAlert("success", "add Todo Success...");
  }

  e.preventDefault();
}

//storageden butun todolari almis olacak
//burda olusturduumuz fonksiyonu heryerde kulanacagiz get from isimlendiriyoruz.
function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  //burda storage cagirmis olduk
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  // console.log(alert);

  // Append the alert to the first card body
  firstCardBody.appendChild(alert);
  //setTimeout ile  alert message bellibir saniyaden sonra silinecek
  setTimeout(function () {
    alert.remove();
  }, 1000);
}

function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class ='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
}

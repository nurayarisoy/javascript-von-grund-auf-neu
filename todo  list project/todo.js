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
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Please enter a todo");
  } else {
    addTodoToUI(newTodo);
    showAlert("success", "add Todo Success...")
  }

  e.preventDefault();

}

function showAlert(type, message) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
 // console.log(alert);


  // Append the alert to the first card body
  firstCardBody.appendChild(alert);
  //setTimeout ile  alert message bellibir saniyaden sonra silinecek
  setTimeout(function(){
    alert.remove();
  },1000);
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

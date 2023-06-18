//tum elementleri secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const toduList = document.querySelector(".list-group");
const firstCardBody = documnt.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const fiter = document.querySelector("#filter");
const clearbutton = document.querySelector("#clear-todos");

eventListener()
function eventListener(){//tum eventlistener
         form.addEventListener('submit',addTodo)
 }
 function addTodo(e){


    e.preventDefault();
 }
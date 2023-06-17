//session storege -key-vaue
// button  wählung
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
//input
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("cliek", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("clink",clearItem);
function addItem(e){
 sessionStorage.setItem(addkey.value, addvalue.value)   
}
function deleteItem(e){
    
}
function clearItem(e){
    
}

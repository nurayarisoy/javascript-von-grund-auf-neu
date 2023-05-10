let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;
//child nodes
value = todoList.childNodes; //normalde 4 element var burda 9 cikiyor li bosluklarinida aliyor
value = todoList.childNodes[0];
//child -element
value = todoList.children;

value = todoList.children[todoList.children.length - 1]; // 4 elementi gosterir
value = todoList.children[2].textContent = "changed";
//cardrow cchild larina bakalim div ler olarak bakiyon

value = cardrow; // cardrow geldik
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "changed";

value = todoList;
value = todoList.children[0]; //ilk cocuguna git
value = todoList.firstElementChild; //ilk elemana ulasiriz
valu = todoList.lastElementChild; //son elemana ulasiriz
value = todoList.children.length; // kac tane cocuku var
//daha kisa elementbulma
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement; // cardrow ebebeyini geldim container
value = cardrow.parentElement.parentElement; // onunda bir ustu body

// element kardaslari

value = todo;
value = todo.previousElementSibling; //elementin ilk kardesi
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling; //birsonraki kardesin kardesine ulasiyon
value = todo.previousElementSibling.previousElementSibling;
console.log(value);

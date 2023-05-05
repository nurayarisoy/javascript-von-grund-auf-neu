//elemenkleri Id ye gore secme
let element;
element = documnet.getelementById("todo-form");

// element  class a gore secme
element.getelementByIClassname("list-group-item");
element.getelementByIClassname("card-headre");
//element Tage gore secme
element.getelementByTagName("div");

// query select -css selector tek bir eleman secer diger lerinin yerine class id tag yerine
element=document.querySelector("#todo-form");
element=document.querySelector("#tasks-title");
element=document.queryselector(".list-group-item");
element=document.querySelector('li')
element=document.querySelector('div')
//queryselectroAll -tum elementleri sec
element=document.queryselectorAll(".list-group-item");
//foreach ile bu listle dolasiriz.
element.forEach(function(el){//node list seklinde doner
console.log(el);
})
//console.log(elemet);


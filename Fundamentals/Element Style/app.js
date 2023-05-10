const element = document.querySelector("#clear-todos");
//elementin ozelikleri
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.texContent);
console.log(element.innerHTLM);
console.log(element.href);
console.log(element.style);
//style element özellikllerini degistirme
element.className = "btn btn-primary"; //renklerini degistir
element.style.color = "#000"; //yazinin rengi koyulastir
element.style.marginLeft = "50px";
element.href = "https://arisoy-portfolio.netlify.app/";
element.target = "blank";
element.textContent = "Löschen";
element.textContent = "löschen";
element.innerHTML = "<span style='color:white'>Löschen</span>";
/*const elements = document.querySelectorAll(".list-group-item"); //node list gelecek
elements.forEach(function (el) {
  el.style.color = "dark";
  el.style.background = "#eee";
}); *///m3scholl CSS selector istedigin child secersin istedigi li secmek  icin
let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-Child(2)");
element2 = document.querySelector("li:nth-Child(3)");
element2 = document.querySelector("li:nth-Child(4)");
element2 = document.querySelector("li:nth-Child(odd)"); //tek elementler 3 5 elemanlar
element2 = document.querySelectorAll("li:nth-Child(even)"); //cift child lari secersin
element2.forEach(function (el) {
  el.style.background = "#ccc";
  el.style.color = "red";
});

console.log(element2);

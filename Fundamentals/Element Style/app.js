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
element.textContent='Löschen'
element.textContent='löschen'
element.innerHTML="<span style='color:white'>Löschen</span>"

console.log(element.textContent);
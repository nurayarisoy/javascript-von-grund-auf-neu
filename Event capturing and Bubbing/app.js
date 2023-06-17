// Event bubbling
// document.querySelector('container').addEventListener('cick',function(){
// console.log('Div container');
// });

// document.querySelector('.card.row').addEventListener('cick',function(){
// console.log('card Row');
// });

// document.querySelectorAll('.card-body')[1].addEventListener('cick',function(){
// console.log('card Body');
// });
// event capturing  delegation(yakalma)
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", run);
function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("silme islemi");
  }
  if (e.target.id === "filter") {
    console.log("filitreleme islemi");
  }
  if (e.target.id=== "clear-todos") {
    console.log("All task delelte");
  }
}
//bu ozelikle card body icerisindeki butun yerlere tiklayinca calisacak birinci todo ikinci ucuncu todo da

// eger ben bir input fokus (yani uzerine birseyler yazmak) event
const filterInput=document.getElementById("filter");
const todoForm =document.getElementById('todo-form')

todoForm.addEventListener('submit',submitForm);
function submitForm(e){
    console.log('subment event')
    e.preventDefault(); //bununla deaful etmiyoruz sayfa yenilenmiyor.
}
//filterInpunt.onfocus=function(){
    //console.log('nehaber');
//};
//filterInput.addEventListener('focus',function(e){
  //  console.log(e);
  //  console.log(EventTarget);
//})

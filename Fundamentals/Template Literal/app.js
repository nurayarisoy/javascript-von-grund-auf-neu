const name = "nuray arisoy";
const department = "tegnologie";
const salary = 4000;

//const a ='isim:'+ Name +'\n'+'Department:'+Department+'\n'+'Salary:'+Salary+ 4000;
// template literal  backtick isaretini kullaniyoruz`` ters slas bir altsatira geciyorsun

//const a= `isim:${name}\nDepartman:${department}\nMaas:${salary}`;

//const html ='<ul>'+
//'<li>'+ name +'</li>'+
//'<li>'+ department +'</li>'+
//'<li>'+ salary +'</li>'+
//'</ul>';
function a() {
    return "Hallo";
}
 const html =`
 <ul>
 <li>${name}</li>
 <li>${department}</li>
 <li>${salary}</li>
 <li>${10/4}</li>
 <li>${a()}</li>
 </ul>
 
 
 `
 document.body.innerHTML =html




console.log(a);

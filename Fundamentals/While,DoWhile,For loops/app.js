//while dönguler
/*let i =0;
while (i<10) { //sonsuz donguye girer buyuzden artirmliyiz
   console.log(i) ;
   i ++;
} 
let i =10;
while (i>0) {
    console.log(i)
   // i--;
   i-=2;
    
}
// break and continue
let i=0;
while (i <10) {
   console.log(i)
   if (i==5) {
    break //braek le sadece 5 kadar gelir ve donguden cikar
   
   } 
   i++;
}
//continue
let i = 0;
while (i < 10) {
  if (i == 3 || i == 5) {
    i++; // burda yazarsak ozaman 3 ve 5 es gecer.
    continue;
  }

  console.log(i);
  i++; //burad artirirsak continue den dolayi sonsuz dönguye girer
}
// do while once calistiriyor sonra kosul olusturuyor

let i=0;
do{
    console.log(i);
    i++;

}while (i<10) ; */
// for loops
/*const langs = ["python", "java", "c++"];
let index=0;
  while(index <langs.length){
    console.log(langs[index])
    index++;
  }
for (let index = 0; index < langs.length; index++) {
  console.log(langs[index]);
}
//foreach tektek dolas diyorsun

const langs = ["python", "java", "c++"];
 langs.forEach(function(lang,index){
    console.log(lang,index);
 });
//map funkstionu daha cok framework reactta kullanilir.
const users = [
  { name: "nuray", age: 25 },
  { name: "suat", age: 45 },
  { name: "ayse", age: 50 },
];
const names= users.map(function(user){
    return user.name;

});
const ages =users.map(function(user){
    return user.age;
})
console.log(names);
console.log(ages);*/
//for  in  function
const user={
    name:'nuray',
    age:25
};
for (let key in user){
    console.log(key,user[key]); //property olarak donecek yani name age alacaz.eger nuray ve 25 alirsak key, user[key] deriz

}


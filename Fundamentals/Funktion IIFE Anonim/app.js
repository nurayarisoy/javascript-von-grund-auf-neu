// funksion  biz birkere yazip farkli yerlerde kullaniyoruz daha duzgun kod yazmis oluyoruz.spagetti yani ayni kodu defelarca gerektiginde yazmak zorunda kalmiyorsun.
/*function hallo (){
   console.log('hallo');

}
hallo(); //funktion call
hallo(); // birden fazla bu sekilde cagira bilirim
// ben uray bilgi yani parametre nasil yaparim
function hallo1(age,name ){
    
    console.log(`isim${name} yas${age}`);
}
hallo1('nuray',25);// bunlar funksion lardaki parametreler
 hallo1()// undefined icin de kosul kayabilirim if ve else
  function hallo(name, age){
    if( typeof name==="undefined") name ='bilgi yok';
    if(typeof age==='undefined') age='bilgi yok'
    console.log(`isim${name} yas${age}`);
  }
  hallo(); 
    //farkli sekildede tanimlaya biliriz
function hallo(name='bilgi yok', age='bilgiyok'){
console.log(`isim: ${name} yas: ${age}`);
}
hallo();*/

//return  neden kullaniriz mesale clg ile biz funktionu gormeye calisiri  fakatbunu birker yapiyoruz ikinci yapinca nana doner
 /* function square(x){
    console.log('x*x*'); // 144 cikar

  }
  function cube(x){
    console.log('x*x*X*');// bir funksionu diger funksiona tasiyamazsin  burda NaN cikae burda reurn kullaniriz. 
  }
  let a= cube(a);
  a= cube(a);
  console.log(a) //Nan
  function square(x){
   return x * x;
   console.log('nehaber')// hicbir zaman gemez return funksionu sonladirir.


  }
  function cube(x){
    return x*x*x;
  }
  let a = cube(square(12));
 
  console.log(a); 
  function merhaba(){
    return 'merhaba';

  }
  console.log(merhaba());
  // function expression bir degiskeni funktion esitliyoruz
const merhaba= function(name){
    console.log('merhaba'+ name);
};
merhaba('nuray');
//immediately invoked function expression (lIfe)tanimlandigi yerde calisan funktion turu
(function(name){
    console.log('merhaba'+name);
})('nuray');*/
// bir objenin icinde funktion var ise metod denir. objenin  disinda funksion deniyor
 const database={
    host:'localhost',// bu ozeligi proportisi
    add:function(){//metodlari add metodu
        console.log('eklendi');
    },
    get:function(){
    console.log('elde edildi')

    },
    update :function(id){
        console.log(`id: ${id} guncellendi`)

    },
    delete :function(id){
        console.log(`id: ${id} silindi`)
    },

 }
console.log(database.host);//localhost
database.add();//eklendi
database.delete(10);//id:10 silindi
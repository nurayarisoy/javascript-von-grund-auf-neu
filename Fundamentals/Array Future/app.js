let value;
const number = [43, 56, 76, 87];
//const numbers2= new Array(1,2,3,4,5,6) // bu iksi ayni anlamdadir
const lang = ["pythom", "java", "react"];
const a = ["ayse", 2, null, undefined, 3.14];
//lenght
value = numbers.length;
//indexleme
value = numbers[0];
value = numbers[3];
value = numbers[numbers.length - 1]; //son elemani alir
//herhangi bir indexteki degeri degistirme
numbers[2] = 1000; // burda 76 yerine 1000 gekir
value = numbers;
//index of
value = numbers.indexof(1000); // burada 1000 bizim 3 deger oluyor
//77 arrayin sonuna deger ekleme push
numbers.push(200);
value = numbers;
//araryin basina ekleme unschift
numbers.unshift(200);
value = numbers;
//sonuna deger atama
numbers.pop(2);
value = numbers;
//basindan deger atma
numbers.shift();
value = numbers;
// belli degerleri atma
numbers.splice(0, 3);
value = numbers;
// elemanlari ters cevirme
numbers.reverse();
value = numbers;

//siralama yaparken ilk rakamlara bakarak yapiyor
value = numbers.sort();
// siralam buyukten kucuge nasil olur.funksion ousturarak yapariz

value = numbers.sort(function (x, y) {
  return x - y;
});

value = numbers.sort(function (x, y) {
  return y - x; //buseferde buyukden kucuge siralar
});

console.log(value);

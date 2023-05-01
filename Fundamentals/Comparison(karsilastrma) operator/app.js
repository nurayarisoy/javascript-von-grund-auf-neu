//karsilastirma operatorleri
// ==
// ===
// != esit degil
// !== burada deger ve type bakarak esit degilmi
// >
// <
// >=
// <=
// bunlarin sonucu boolean deger donuyor
 console.log(2==2); //true
 console.log('js'=='ad'); // false typler ayni amadegerler farkli
 console.log(2=='2');//true degerler ayni typler ayni olmasada string zannediyor.
 console.log(2==="2")//false cunku degerler ayni typler 3 esitte bakilir typler farrkli
// mantiksal baglajlar
//Not operator
//true ise false false true  cevirir.
console.log(!(2!=2)); // normalde 2!=2 false cikar ! not isaretini basa koyarsak true olur.
//and operatör hepsi kosullarin true ise true false false olur
console.log((2==2)&& ('ahmet'=='ahmet')); //true
//or poperatörü
//or en az bir tane true ise hepsi true cikar.hepsi false olmasisonucu false cikar.
/*console.log((4==2)||('ahmet'=='ahmet'));// true

if (kosul){
    //if blok  true calisir
};
const error =false;
if (error==true){
    console.log('hatta olustu')
}
else{
    console.log('hata olusmadi');

}
 const user ='mmc'

 if (user=='mmc'){
    console.log('kullanici bulundu')

 }
 else{
    console.log('kullanici bulunamadi');

 }
 const process='1'; //islem bir degiskeni verince direk 1 calisti digerleri cakismadi.eger const process = '2' yapsam busefer else if caisacak
 if(process==='1'){
console.log('islem1')
 }
 else if (process==='2'){
console.log('islem2')
}
else if (process==='3'){
    console.log('islem3')
}
else{
    console.log('gecersiz islem')
}
 const number =100;
 if (number===100){
    console.log('sayi 100 esittir')
 }*/
 // ternary operator(tekbir clg islemi yapiyorsak )

//console.log(number==100 ?'sayi100': 'sayi100degilse')

//if (number===100)console.log('sayi100') //burda tek kosulda suslu parantese gerekmez

//switch case ayni if else gibi
const process=100;
switch(process){
    case 100:
    console.log('islem100');
    break; // case den ve swich den cik anlamina geliyor.break olmasa butun caselere girer.

    case 1:
    console.log('islem1');
    break
    default:
        console.log('gecersiz islem')
}
let value;
const programmer = {
  //object creating suslu parantes aciyor ve obje ozellik yada metodlari giriyoruz.
  name: "nuray arisoy",
  age: 40,
  email: "cevriyeceven@gmail.com",
  langs: ["python", "javaScript"],
  adress: {
    city: "witten",
    street: "breiter",
  },
  //metod burad work bir metod . metod da bir functionolsun
  work: function () {
    console.log("program calisiyor");
    // bu objeye nasil ulasacagiz   en basa let value
  },
};
value = programmer;
value = programmer.email; //burada proramcinin ozelliklerini alabilirim.
value = programmer["email"]; // busekilde de olur
value = programmer.langs;
programmer.work(); //funktion bu sekilde aliyorsun.

// json bu sekilde obje oluyor. arrayleri nasil yapiyoruz
const programmers = [
  { name: "nuray arisoy", age: 40 },
  { name: "suat arisoy", age: 45 },
];
value = programers[0].name;

console.log(value);
// object literal
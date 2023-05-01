let value;
const now = new Date(); // suanki zamani alir herhangi zaman yazmazsan
const date1 = new Date("3-5-1999 07:02:09");
const date2 = new Date("1/5/1967 ");
const date3 = new Date("mai 13 1999");
value = date1;
value = date1.getDay(); // 0 =pazar olarak sayiyor
value = date1.getDate();
value = date1.getMonth();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();
// bu objenin degerlerini degistirebilir miyiz.
date1.setDate(4);
date1.setMonth(3);
date1.setFullYear(2020);
date1.setHours(0);
date1.setMilliseconds("04");
date1.setMinutes(20);
date1.setSeconds(39);

 value=date1;
console.log(value);

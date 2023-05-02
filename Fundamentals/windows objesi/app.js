// allert
//alert('merhaba)
//const antwort=confirm('bist du sicher');
//console.log(antwort);
//confirm 
/*if(confirm('bist du sicher')){ //burda kunden ok basarsa  allert gibi confirm cikacak 
    console.log('löschen bitte')
}
else {
    console.log('nicht löschen')
}*/
// prompt
/*const antwort =prompt('2+2=?');
if (antwort==4){
    console.log('richtig');
}
else{
    console.log('falsch');
}*/
//ozelikler
let value;
value=window;
value= window.location;
value= window.location.host;
value= window.location.hostname;
value= window.location.port;
value= window.location.href;
//window.location.reload(); sonsuz dongu olur.
if (confirm('seite reduzieren')) {// confirm: bestätigen
    window.location.reload();// reload tekraryukle
    
}
else{
    console.log('seiete reduziert nicht');
}
console.log(value);

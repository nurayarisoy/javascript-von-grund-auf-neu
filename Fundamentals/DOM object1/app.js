let value;
value = document;

//script
value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];
// linkler
value = document.links;
value = document.links[0];
value = document.links[dokument.links.length - 1];
value = document.links[dokument.links.length - 1].getAttribute("class");
value = document.links[dokument.links.length - 1].getAttribute("href");

// formlar
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].getAttribute("id");
value = document.forms[0].id;
value = document.forms[0].method;
console.log(value);

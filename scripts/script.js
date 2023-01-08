const d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").innerHTML = year;

let lastmodified = new Date(document.lastModified);

document.getElementById("date").innerHTML = lastmodified
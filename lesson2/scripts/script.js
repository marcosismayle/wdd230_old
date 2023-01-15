const d = new Date();
let year = d.getFullYear();

document.getElementById("currentYear").innerHTML = year;

let currentDate = new Date();
let year2 = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let date = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let dateString = "Last Updated: " + month + "/" + date + "/" + year2 + " " + hours + ":" + minutes + ":" + seconds;

document.getElementById("lastUpdated").innerHTML = dateString;

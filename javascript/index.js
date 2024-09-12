function updateTime () {

//São Paulo
let SPElement = document.querySelector("#sao-paulo");
let SPDateElement = SPElement.querySelector(".date");
let SPTimeElement = SPElement.querySelector(".time");
let SPTime = moment().tz("Brazil/West");

SPDateElement.innerHTML = SPTime.format("MMMM Do YYYY");
SPTimeElement.innerHTML = SPTime.format("h:mm:ss [<small>]A[</small>]");

//Berlin
let BerlinElement = document.querySelector("#berlin");
let BerlinDateElement = BerlinElement.querySelector(".date");
let BerlinTimeElement = BerlinElement.querySelector(".time");
let BerlinTime = moment().tz("Europe/Berlin");

BerlinDateElement.innerHTML = BerlinTime.format("MMMM Do YYYY");
BerlinTimeElement.innerHTML = BerlinTime.format("h:mm:ss [<small>]A[</small>]");

//Tokyo
let TokyoElement = document.querySelector("#tokyo");
let TokyoDateElement = TokyoElement.querySelector(".date");
let TokyoTimeElement = TokyoElement.querySelector(".time");
let TokyoTime = moment().tz("Asia/Tokyo");

TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
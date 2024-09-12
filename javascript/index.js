function updateTime () {

//São Paulo
let SPElement = document.querySelector("#sao-paulo");
if (SPElement) {
let SPDateElement = SPElement.querySelector(".date");
let SPTimeElement = SPElement.querySelector(".time");
let SPTime = moment().tz("Brazil/West");

SPDateElement.innerHTML = SPTime.format("MMMM Do YYYY");
SPTimeElement.innerHTML = SPTime.format("h:mm:ss [<small>]A[</small>]");
}
//Berlin
let BerlinElement = document.querySelector("#berlin");
if (BerlinElement) {
let BerlinDateElement = BerlinElement.querySelector(".date");
let BerlinTimeElement = BerlinElement.querySelector(".time");
let BerlinTime = moment().tz("Europe/Berlin");

BerlinDateElement.innerHTML = BerlinTime.format("MMMM Do YYYY");
BerlinTimeElement.innerHTML = BerlinTime.format("h:mm:ss [<small>]A[</small>]");
}
//Tokyo
let TokyoElement = document.querySelector("#tokyo");
if (TokyoElement) {
let TokyoDateElement = TokyoElement.querySelector(".date");
let TokyoTimeElement = TokyoElement.querySelector(".time");
let TokyoTime = moment().tz("Asia/Tokyo");

TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_","    ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
      <h2>${cityName} </h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    <a href="https://worldclockprojectbyisa.netlify.app/">Return</a>
    `;

}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
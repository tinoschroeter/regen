const rain = document.querySelector("#rain");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const loader = document.querySelector(".loader");

const getData = () => {
  fetch("/api")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      loader.style.display = "none";
      rain.innerText = data.text;
      city.innerText = data.city;
      temp.innerText = data.temperature + "℃";
    });
};

getData();
setInterval(() => getData(), 10 * 1000);

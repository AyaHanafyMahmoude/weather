let inpitSearch = document.querySelector("#input-search");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
inpitSearch.addEventListener("keyup", function () {
    getweatherdata(inpitSearch.value);
})
let cities = [];

async function getweatherdata(city = "london") {
    let responseweather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dd0808df97254d7680e01232221501&q=${city}&days=3&aqi=no&alerts=no`);
   cities = await responseweather.json();
    
    displayfirstday()
    displayfocasttwodays()
    displayfocastthirddays()
}
function displayfirstday() {
    let today = document.getElementById("to-day")
    let cityname = document.getElementById("city-name")
    let firsttem = document.getElementById("tem-c")
    let iconfirst = document.getElementById("f-icon")
    let weatherstate = document.getElementById("weather-state")
    let monthname = document.getElementById("month-name")
    cityname.innerHTML = cities.location.name;
    firsttem.innerHTML = cities.current.temp_c + `<sup>o</sup> C`
    iconfirst.setAttribute("src", `https:${cities.current.condition.icon}`)
    weatherstate.innerHTML = cities.current.condition.text;
    let d = new Date();
    monthname.innerHTML = d.getDate()+ months[new Date().getMonth()];
    today.innerHTML = days[d.getDay()]
}
function displayfocasttwodays(){

    let headtwo=document.getElementById("hesd2");
    let day2=days[new Date(cities.forecast.forecastday[0].date).getDay()+1]
    headtwo.innerHTML=day2;
    let seconimg=document.getElementById("secon-img");
    seconimg.setAttribute("src",`https:${cities.forecast.forecastday[1].day.condition.icon}`);
  let t=document.getElementById("par").innerHTML=cities.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup> C`
  document.getElementById("paro").innerHTML=cities.forecast.forecastday[1].day.mintemp_c+`<sup>o</sup> C`
  document.getElementById("pars").innerHTML=cities.forecast.forecastday[1].day.condition.text
  console.log(t)
//   t.innerHTML=forcasts.forecast.forecastday[1].day.maxtemp_c

  

}
function displayfocastthirddays(){

    let headtwo=document.getElementById("hea3");
    let day2=days[new Date(cities.forecast.forecastday[1].date).getDay()+1]
    headtwo.innerHTML=day2;
    let seconimg=document.getElementById("third-img");
    seconimg.setAttribute("src",`https:${cities.forecast.forecastday[2].day.condition.icon}`);
  let t=document.getElementById("parr").innerHTML=cities.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup> C`
  document.getElementById("paror").innerHTML=cities.forecast.forecastday[2].day.mintemp_c+`<sup>o</sup> C`
  document.getElementById("parir").innerHTML=cities.forecast.forecastday[2].day.condition.text
  console.log(t)
//   t.innerHTML=forcasts.forecast.forecastday[1].day.maxtemp_c

  

}
getweatherdata()

// end code of search for city
let c=" aya hanafy mahmoud"
c.split(" ")
console.log(c)
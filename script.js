function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

getLocation()

function showPosition(position){
    var lattitude=position.coords.latitude
    var longitude=position.coords.longitude

    // console.log(position);
    fetch(`https://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${lattitude},${longitude}`)
    .then(data=>data.json())
    .then(weather=>locationWeather(weather))
}

function locationWeather(weather){
    var pic=weather.current.condition.icon
    var htmlPic=`<img style="width;50px; height; 50px;" src="${pic}"/>`
    locationPic.innerHTML=htmlPic

    var temp=weather.current.temp_c
    var htmlTemp=`<h4 class="mt-2">${temp}°C</h4>`
    locationTemp.innerHTML=htmlTemp

    var locStatus=weather.current.condition.text
    var htmlStatus=`<h4 class="mt-2">${locStatus}</h4>`
    locationStatus.innerHTML=htmlStatus
 
    // console.log(htmlPic,htmlStatus,htmlTemp);
}

function searchCity(){
    var cityName=citySearch.value

    fetch(`https://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${cityName}`)
    .then(data=>data.json()).then(weather=>searchWeather(weather))
}

  
function searchWeather(weather){
    var cityStatus1=weather.current.condition.text
    var htmlStatus=`<h5 class='mt-2'>${cityStatus1}</h5>`
    cityStatus.innerHTML=htmlStatus
    // console.log(weather);

    var cityPicWeather=weather.current.condition.icon
    var htmlPicCity= `<img class="mt-3" src="${cityPicWeather}" alt=""></img>`
    cityPic.innerHTML=htmlPicCity

    var placeNme=weather.location.name 
    var htmlPlace=`<h1 class='mt-2'>${placeNme}</h1>`
    cityName.innerHTML=htmlPlace

    var Temperature=weather.current.temp_c
    var htmlCityTemp=`<h4>Temperature</h4><br/><h1>${Temperature}°C</h1>`
    temperature.innerHTML=htmlCityTemp

    var Humidity=weather.current.humidity
    var htmlCityHumi=`<h4>Humidity</h4><br/><h1>${Humidity}g/m3</h1>`
    humidity.innerHTML=htmlCityHumi

    var pressure1=weather.current.pressure_mb
    var htmlPressure=`<h4>Pressure</h4><br/><h1>${pressure1}Pa</h1>`
    pressure.innerHTML=htmlPressure

    var wind=weather.current.wind_kph
    var htmlWind=`<h4>Wind</h4><br/><h1>${wind}kmph</h1>`
    windspeed.innerHTML=htmlWind

    var cloud1=weather.current.cloud
    var htmlCloud=`<h4>Cloud</h4><br/><h1>${cloud1}%</h1>`
    cloud.innerHTML=htmlCloud

    var percep1=weather.current.precip_mm
    var htmlPrecipitation=`<h4>Precipitation</h4><br/><h1>${percep1}mm</h1>`
    precipitation.innerHTML=htmlPrecipitation

}
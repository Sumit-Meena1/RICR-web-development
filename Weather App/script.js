async function getWeather()
{
    const city = document.getElementById("city").value.trim();
    const {lat , lon} = await getGeoLocation(city);
    console.log(lat , lon);
    

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d12473d272ac0a066145ac2465e01dec`);

    const data = await res.json();

    document.getElementById("weatherData").innerHTML = `
        <div>
            <p>Temperature : ${(data.main.temp - 273.14).toFixed(2)} C </p>
            <p>Humidity : ${data.main.humidity}% </p>
            <p>Description : ${data.weather[0].description} </p>
        </div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="weatherIcon">
    `



}

async function getGeoLocation(city)
{
    console.log(city);
    const res =  await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d12473d272ac0a066145ac2465e01dec`)
    const data = await res.json();

    const lat = data[0].lat;
    const lon = data[0].lon;
    return {lat, lon};
    

}
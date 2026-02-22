const apiKey = "f8c2be58d6408402ae5bd4add2cfa8e3";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        if(response.status == 404){
            alert("City not found");
            return;
        }

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        

        
        const icons = {
            Clouds: "images/clouds.png",
            Clear: "images/clear.png",
            Drizzle: "images/drizzle.png",
            Mist: "images/mist.png",
            Rain: "images/rain.png"
        };

        weatherIcon.src = icons[data.weather[0].main] || "images/snow.png";
        

        document.querySelector(".weather").style.display = "block";
    }


    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
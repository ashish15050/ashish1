const apiKey="ffc2a68e0665db391423157d9744453c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const SearchBox=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")


async function checkWeather(city){
    const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        document.querySelector(".error").style.display="none"
        document.querySelector(".weather").style.display="block"

        var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src='clouds.png';
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src='clear.png';
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src='rain.png';
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src='drizzle.png';
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src='mist.png';
    }
    document.querySelector(".weather").style.display="block";

  }
    }
    
SearchBtn.addEventListener('click',()=>{
    checkWeather(SearchBox.value);
})
// checkWeather(city);
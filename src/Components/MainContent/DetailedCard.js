import React, {useState, useEffect} from 'react'
import axios from "axios";
import { FaWind, FaHandHoldingWater, FaTemperatureHigh, FaSun, FaRegHeart, FaMoon } from 'react-icons/fa';
// import { useParams } from 'react-router';


export default function DetailedCard() {


// const {locationcity} = useParams()

const [weather, setWeather]  = useState([]);  
const [forecast, setForecast] = useState([]);

const lat = weather.coord && weather.coord.lat;
const lon = weather.coord && weather.coord.lon
const unixSet = weather.sys && weather.sys.sunset;
const unixRise = weather.sys && weather.sys.sunrise;
const unixTime = weather.dt && weather.dt;
const unixDayOne = forecast.daily && forecast.daily[1].dt;
const unixDayTwo = forecast.daily && forecast.daily[2].dt;
const unixDayThree = forecast.daily && forecast.daily[3].dt;
const unixDayFour = forecast.daily && forecast.daily[4].dt;
const datesunset = new Date(unixSet*1000).toLocaleTimeString("en-US");
const datesunrise = new Date(unixRise*1000).toLocaleTimeString("en-US");
const daytime = new Date(unixTime*1000).toLocaleTimeString("en-US");
const oneday = new Date(unixDayOne*1000).toLocaleDateString("en-US");
const twoday = new Date(unixDayTwo*1000).toLocaleDateString("en-US");
const threeday = new Date(unixDayThree*1000).toLocaleDateString("en-US");
const fourday = new Date(unixDayFour*1000).toLocaleDateString("en-US");


const urllatlon = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord && weather.coord.lat}&lon=${weather.coord && weather.coord.lon}&exclude=minutely&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`

const url = `https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`
const url1 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[1].weather[0].icon}@2x.png`
const url2 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[2].weather[0].icon}@2x.png`
const url3 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[3].weather[0].icon}@2x.png`
const url4 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[4].weather[0].icon}@2x.png`

useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kairo&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
    .then(res => {
       console.log(res.data)
       setWeather(res.data)
    }).catch(err => {
       console.log(err)
    })
}, [])

  

 useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=30.0626&lon=31.2497&exclude=minutely&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
    .then(res => {
       console.log(res.data)
       setForecast(res.data)
    }).catch(err => {
       console.log(err)
    })
}, [])




console.log(lon);
console.log(lat);

return (

    <div className='random-detail-container'>

            <div className="weather-card">
            
            <div className="div1">
                <p>{weather.name && weather.name}</p>
                <p>{weather.sys && weather.sys.country}</p>
            </div>
            
            <div className="div2">
                <p>{daytime}</p>
                <p>{weather.main && weather.main.temp}&deg;C</p>
            </div>
            
            <div className="div3">
                <img src={url} alt="" />
                <p>{weather.weather && weather.weather[0].main}</p></div>
            <div className="div4">
                <h1><FaRegHeart /></h1>
                </div>
            <div className="div5">
                <p><FaHandHoldingWater />{weather.main && weather.main.humidity}%</p>
                <p><FaWind />{weather.wind && weather.wind.speed} km/h</p>
                <p><FaMoon  />{datesunset}</p>
                <p><FaSun />{datesunrise}</p>
                <p><FaTemperatureHigh /> Feels like: {weather.main && weather.main.feels_like}&deg;C</p>
            </div>
            <div className="div6">
                <div>
                    <p>{oneday}</p>
                    <img src={url1} alt=""/>
                    <p>{forecast.daily && forecast.daily[1].temp.min} / {forecast.daily && forecast.daily[1].temp.max}</p>
                </div>
                <div>
                    <p>{twoday}</p>
                    <img src={url2} alt=""/>
                    <p>{forecast.daily && forecast.daily[2].temp.min} / {forecast.daily && forecast.daily[2].temp.max}</p>
                </div>
                <div>
                    <p>{threeday}</p>
                    <img src={url3} alt=""/>
                    <p>{forecast.daily && forecast.daily[3].temp.min} / {forecast.daily && forecast.daily[3].temp.max}</p>
                </div>
                <div>
                    <p>{fourday}</p>
                    <img src={url4} alt=""/>
                    <p>{forecast.daily && forecast.daily[4].temp.min} / {forecast.daily && forecast.daily[4].temp.max}</p>
                </div>
        
            </div>
            <div className="div7"> <iframe title="title" width="600px" height="400px"src="https://api.lookr.com/embed/player/1000550952/day?autoplay=1"></iframe> </div>
            </div>
    </div>
  )
}


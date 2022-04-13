import React, {useState, useEffect} from 'react'
import axios from "axios";
import { FaWind, FaHandHoldingWater, FaTemperatureHigh, FaSun, FaRegHeart, FaMoon } from 'react-icons/fa';

export default function DetailedCard() {
 
    
const [weather, setWeather]  = useState([]);  

const unixSet = weather.sys && weather.sys.sunset;
const unixRise = weather.sys && weather.sys.sunrise;
const unixTime = weather.dt && weather.dt;
const datesunset = new Date(unixSet*1000).toLocaleTimeString("en-US");
const datesunrise = new Date(unixRise*1000).toLocaleTimeString("en-US");
const daytime = new Date(unixTime*1000).toLocaleTimeString("en-US");

const url = `https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`

useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=kairo&appid=2252d055e80dd2d34028214774f8cb5e&units=metric')
    .then(res => {
       console.log(res.data)
       setWeather(res.data)
    }).catch(err => {
       console.log(err)
    })
}, [])
  
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
                    <p>Friday</p>
                    <img src='https://openweathermap.org/img/wn/04d@2x.png' alt=""/>
                    <p>66° / 41°</p>
                </div>
                <div>
                    <p>Friday</p>
                    <img src='https://openweathermap.org/img/wn/04d@2x.png' alt=""/>
                    <p>66° / 41°</p>
                </div>
                <div>
                    <p>Friday</p>
                    <img src='https://openweathermap.org/img/wn/04d@2x.png' alt=""/>
                    <p>66° / 41°</p>
                </div>
                <div>
                    <p>Friday</p>
                    <img src='https://openweathermap.org/img/wn/04d@2x.png' alt=""/>
                    <p>66° / 41°</p>
                </div>
        
            </div>
            <div className="div7"> <iframe title="title" width="600px" height="400px"src="https://api.lookr.com/embed/player/1000550952/day?autoplay=1"></iframe> </div>
            </div>
    </div>
  )
}


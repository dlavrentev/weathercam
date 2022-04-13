import React, {useState, useEffect} from 'react'
import axios from "axios";
import { FaWind, FaHandHoldingWater, FaTemperatureHigh, FaSun, FaRegHeart, FaMoon } from 'react-icons/fa';

export default function DetailedCard() {
 
    
const [weather, setWeather]  = useState([]);  


useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=2252d055e80dd2d34028214774f8cb5e')
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
                <p>{weather.name}</p>
                <p>{weather.sys.country}</p>
            </div>
            
            <div class="div2">
                <p>Thursday 1:23pm</p>
                <p>{weather.main.temp}</p>
            </div>
            
            <div className="div3">
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
                <p>{weather.weather[0].main}</p></div>
            <div className="div4">
                <h1><FaRegHeart /></h1>
                </div>
            <div className="div5">
                <p><FaHandHoldingWater /> 90%</p>
                <p><FaWind /> 2mph</p>
                <p><FaMoon /> 8:23pm</p>
                <p><FaSun /> 5:23pm</p>
                <p><FaTemperatureHigh /> Feels like: 125°</p>
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


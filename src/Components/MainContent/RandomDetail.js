import React, { useState } from "react";
import axios from "axios";
import { FaWind, FaHandHoldingWater, FaTemperatureHigh, FaSun, FaRegHeart, FaMoon } from 'react-icons/fa';

  

export default function RandomDetail() {
  
    const [data, setData] = useState({})
    const [location, setLocation] = useState ("")
  
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2252d055e80dd2d34028214774f8cb5e`
    
    const searchLocation = (event) => {
      if(event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  
  
  
  
    return (
    <div className='random-detail-container'>
            
            <div class="weather-card">
            
            <div class="div1">
                <p>New York</p>
                <p>USA</p>
            </div>
            
            <div class="div2">
                <p>Thursday 1:23pm</p>
                <p>29°C</p>
            </div>
            
            <div class="div3">
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
                <p>Cloudy</p></div>
            <div class="div4">
                <h1><FaRegHeart /></h1>
                </div>
            <div class="div5">
                <p><FaHandHoldingWater /> 90%</p>
                <p><FaWind /> 2mph</p>
                <p><FaMoon /> 8:23pm</p>
                <p><FaSun /> 5:23pm</p>
                <p><FaTemperatureHigh /> Feels like: 125°</p>
            </div>
            <div class="div6">
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
            <div class="div7"> <iframe title="title" width="600px" height="400px"src="https://api.lookr.com/embed/player/1000550952/day?autoplay=1"></iframe> </div>
            </div>
    </div>
  )
}

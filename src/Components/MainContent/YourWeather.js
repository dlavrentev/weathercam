import React from 'react'

export default function YourWeather() {
  return (
    <div className="yourweather-container">
    <div class="widget">
          
          <div className="left-panel panel">
              <div className="date">
                  Monday, 20 Aug 2018
              </div>
              <div className="city">
                  Mumbai
              </div>
              <div className="temp">
                 <img src="https://seeklogo.com/images/S/sunny-weather-symbol-logo-4E2A5E54AA-seeklogo.com.png" alt="" width="60" height="60"/>
                 27&deg;
              </div>
          </div>
          <div className="right-panel panel">
              <img src="https://picsum.photos/200/300" alt="" width="160" height="80"/>
          </div>
      </div>
  </div>
  )
}

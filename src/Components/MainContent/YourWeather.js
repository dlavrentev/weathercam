import React, { useContext} from 'react'
import { ModeContext } from '../../Context/ModeContext'

export default function YourWeather() {

const {darkMode, setDarkMode} = useContext(ModeContext)

    
  return (
    <div className={darkMode ? "yourweather-container yourweather-container-dark" : "yourweather-container"}>
    <div className={darkMode ? "widget  widget-dark" : "widget"}>
          
          <div className="left-panel panel">
              <div className={darkMode ? "date  date-dark" : "date"}>
                  Monday, 20 Aug 2018
              </div>
              <div className={darkMode ? "city  city-dark" : "city"}>
                  Mumbai
              </div>
              <div className={darkMode ? "temp  temp-dark" : "temp"}>
                 <img src="https://seeklogo.com/images/S/sunny-weather-symbol-logo-4E2A5E54AA-seeklogo.com.png" alt="" width="60" height="60"/>
                 27&deg;C
              </div>
          </div>
      </div>
  </div>
  )
}

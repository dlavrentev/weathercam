import React, { useState, useContext } from "react";
import axios from "axios";

import { ModeContext } from '../../Context/ModeContext'


export default function SearchLocation() {

  const {darkMode, setDarkMode} = useContext(ModeContext)
  
  const [location, setLocation] = useState ("")
  const [data, setData] = useState({})
  const [showdiv,setShowdiv] = useState(false);
  

  const unixTime = data.dt && data.dt;
  const daytime = new Date(unixTime*1000).toLocaleTimeString("en-US");


  const weatherimage = `https://openweathermap.org/img/wn/${data.weather && data.weather[0].icon}@2x.png`
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2252d055e80dd2d34028214774f8cb5e`

  const searchLocation = (event) => {
    if(event.key === "Enter") {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      setShowdiv(true);
    })
    setLocation("")
  }
}
  
  


return (
    <div className={darkMode ? "searchlocations-container searchlocations-container-dark" : "searchlocations-container"}>
    
    
      <div className="search-container">
        
        <h1 className={darkMode ? "weahtercam-h weathercam-h-dark" : "weathercam-h"}>WEATHERCAM</h1>
        <input id="searchlocations" className="searchlocations" type="text" placeholder="Search" aria-label="Search" value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)}/>
      
      </div>
        {
          showdiv ? <div className="widget">
          <div className="left-panel panel">
              <div className="date">
                  <p>{daytime}</p>
              </div>
              <div className="city">
                  {data.name}
              </div>
              <div className="temp">
                 <img src={weatherimage} alt="" width="100" height="100"/>
                 {data.main && data.main.temp}&deg;
              </div>
          </div>
          <div className="adetails">
                <a className="adetailstext" href={`/detailedcard/${data.name}`}>Details</a>
          </div>
    </div> : null
        }
      
      
      
    </div>    
        
  )}








  



  


  




  

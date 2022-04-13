import React, { useState } from "react";
import axios from "axios";


export default function SearchLocation() {
  
  const [location, setLocation] = useState ("")
  const [data, setData] = useState({})
  

 
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
    <div className="searchlocations-container">
    
    
      <div className="search-container">
        
        <h1>WEATHERCAM</h1>
        <input id="searchlocations" className="searchlocations" type="text" placeholder="Search" aria-label="Search" value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)}/>
      
      </div>
        
      <div class="widget">
            <div className="left-panel panel">
                <div className="date">
                    Monday, 20 Aug 2018
                </div>
                <div className="city">
                    {data.name}
                </div>
                <div className="temp">
                   <img src="https://seeklogo.com/images/S/sunny-weather-symbol-logo-4E2A5E54AA-seeklogo.com.png" alt="" width="60" height="60"/>
                   27&deg;
                </div>
            </div>
            <div className="right-panel panel">
                  <img src="https://picsum.photos/200/300" alt="" width="160" height="80"/>
                  <a href="/detailedcard">Details</a>
            </div>
      </div> 
      
      
    </div>    
        
  )}








  



  


  




  

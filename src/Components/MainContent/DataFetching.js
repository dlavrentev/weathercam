import React, {useState, useEffect} from 'react'
import axios from "axios";


export default function DataFetching() {
   const [posts, setPosts] = useState([]);
  
     useEffect(() => {
         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=2252d055e80dd2d34028214774f8cb5e`)
         .then(res => {
             console.log(res)
             setPosts(res.data)
         })
         .catch(err => {
             console.log(err)
         })
     }, [])
  
  
    return (
      <div className='random-detail-container'>
      <div class="weather-card">
            
            <div class="div1">
                {/* <p>{posts.name}</p> */}
                {/* <p>{posts.sys.country}</p> */}
            </div>
            
            <div class="div2">
                <p>Thursday 1:23pm???</p>
                {/* <p>{posts.main.temp}</p> */}
            </div>
            
            <div class="div3">
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
                {/* <p>{posts.weather[0].main}</p> */}
            </div>
            <div class="div4">
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
                </div>
            <div class="div5">
                {/* <p>{posts.main.humidity}%</p> */}
                <p>60%</p>
                <p>70%</p>
                <p>5:23pm</p>
                <p>Feels like: 125°</p>
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
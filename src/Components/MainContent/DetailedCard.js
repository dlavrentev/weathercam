import React, {useState, useEffect, useContext} from 'react'
import axios from "axios";
import { FaWind, FaHandHoldingWater, FaTemperatureHigh, FaSun, FaRegHeart, FaMoon, FaRandom, FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router';
import cities from '../Data/cities'
import { ModeContext } from '../../Context/ModeContext';
import spinner from '../../assets/spinner.gif';

export default function DetailedCard() {

const {darkMode, setDarkMode} = useContext(ModeContext);

const {cityname} = useParams()

const [weather, setWeather]  = useState([]);  
const [forecast, setForecast] = useState([]);
const [webcamurl, setWebcamurl] = useState("");
const [webcamname, setWebcamname] = useState("");

const [lat, setLat] = useState('');
const [lon, setLon] = useState('');
const [loading, setLoading] = useState(false)
const [like, setLike] = useState(false)


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




const url = `https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`
const url1 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[1].weather[0].icon}@2x.png`
const url2 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[2].weather[0].icon}@2x.png`
const url3 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[3].weather[0].icon}@2x.png`
const url4 = `https://openweathermap.org/img/wn/${forecast.daily && forecast.daily[4].weather[0].icon}@2x.png`
// const urlwebcam = `https://api.lookr.com/embed/player/${webcamid.result && webcamid.result.webcams[0].id}/live`

useEffect(() => {
    setLoading(true)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
    .then(res => {
       console.log(res.data)
       setWeather(res.data)
       setLat(res.data.coord.lat)
       setLon(res.data.coord.lon)
       axios.get(`https://api.windy.com/api/webcams/v2/list/nearby=${res.data.coord.lat},${res.data.coord.lon},50?key=cAV1Y3851XcsjVFz0DTR3obaM7qkPDnb`)
       .then(res => {
            console.log(res.data)
            setWebcamurl(res.data.result.webcams[0].id)
            setWebcamname(res.data.result.webcams[0].title)
            setLoading(false)
       }).catch(err => {
       console.log(err)
        })
    }).catch(err => {
       console.log(err)
    })
}, [cityname])


 
useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
    .then(res => {
       console.log(res.data)
       setForecast(res.data)
    }).catch(err => {
       console.log(err)
    })
}, [lat,lon])


const handleLike = () => {
   if (like === false) {
      return setLike(true);
   } else {
      return setLike(false)
   }
}

// const randomCity = () => {
//   const id = Math.floor(Math.random()*2900000)
//    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
//     .then(res => {
//        console.log(res.data)
//        setWeather(res.data)
//        setLat(res.data.coord.lat)
//        setLon(res.data.coord.lon)
//     }).catch(err => {
//        console.log(err)
//     })
// }

const findRandomCity = () => {
    setLoading(true)
    const cityIndex = Math.floor(Math.random()*10)
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[cityIndex]}&appid=2252d055e80dd2d34028214774f8cb5e&units=metric`)
      .then(res => {
         console.log(res.data)
         setWeather(res.data)
         setLat(res.data.coord.lat)
         setLon(res.data.coord.lon)
         axios.get(`https://api.windy.com/api/webcams/v2/list/nearby=${res.data.coord.lat},${res.data.coord.lon},50?key=cAV1Y3851XcsjVFz0DTR3obaM7qkPDnb`)
       .then(res => {
            console.log(res.data)
            setWebcamurl(res.data.result.webcams[0].id)
            setWebcamname(res.data.result.webcams[0].title)
            setLoading(false)
       }).catch(err => {
       console.log(err)
        })
      }).catch(err => {
         console.log(err)
      })

  }





return (

    <div className={darkMode ? "detail-container detail-container-dark" : "detail-container"}>

            <div className={darkMode ? "weather-card weather-card-dark" : "weather-card"}>
            
            <div className="div1">
                <h2>{weather.name && weather.name}</h2>
                <p>{weather.sys && weather.sys.country}</p>
            </div>
            
            <div className="div2">
                <p>{daytime}</p>
                <h3>{weather.main && weather.main.temp}&deg;C</h3>
            </div>
            
            <div className="div3">
                <img src={url} height="150px" alt="" />
                <h2>{weather.weather && weather.weather[0].main}</h2></div>
            <div className="div5">
                <p className='weather-icons'><FaHandHoldingWater />{weather.main && weather.main.humidity}%</p>
                <p className='weather-icons'><FaWind />{weather.wind && weather.wind.speed} km/h</p>
                <p className='weather-icons'><FaMoon  />{datesunset}</p>
                <p className='weather-icons'><FaSun  />{datesunrise}</p>
                <p className='weather-icons'><FaTemperatureHigh  /> Feels like: {weather.main && weather.main.feels_like}&deg;C</p>
            </div>
            <div className="div6">
                <div className='forecast-day'>
                    <p>{oneday}</p>
                    <img src={url1} alt=""/>
                    <p>{forecast.daily && forecast.daily[1].temp.min}&deg;C / {forecast.daily && forecast.daily[1].temp.max}&deg;C</p>
                </div>
                <div className='forecast-day'>
                    <p>{twoday}</p>
                    <img src={url2} alt=""/>
                    <p>{forecast.daily && forecast.daily[2].temp.min}&deg;C / {forecast.daily && forecast.daily[2].temp.max}&deg;C</p>
                </div>
                <div className='forecast-day'>
                    <p>{threeday}</p>
                    <img src={url3} alt=""/>
                    <p>{forecast.daily && forecast.daily[3].temp.min}&deg;C / {forecast.daily && forecast.daily[3].temp.max}&deg;C</p>
                </div>
                <div className='forecast-day'>
                    <p>{fourday}</p>
                    <img src={url4} alt=""/>
                    <p>{forecast.daily && forecast.daily[4].temp.min}&deg;C / {forecast.daily && forecast.daily[4].temp.max}&deg;C</p>
                </div>
        
            </div>
              <div className="div7"> 
              {
                  loading ? <img alt="wait until the page loads" src={spinner} width="400px" height="400px" /> 
                  : <iframe title="title" width="400px" height="400px"src={`https://api.lookr.com/embed/player/${webcamurl}/live`}></iframe>
              }
                 
                <h2>{webcamname}</h2>
                <div>
                    {
                    like ? <FaHeart size={35} onClick={handleLike} className="like-btn"/> : <FaRegHeart size={35} onClick={handleLike} className="like-btn"/>
                    }
                    <FaRandom size={35} className='reload-heart-btn' onClick={findRandomCity}/>
                </div>
              </div>
            </div>
    </div>
  )
}
import './Style.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchLocation from './Components/MainContent/SearchLocation'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RandomDetail from './Components/MainContent/RandomDetail';
import YourWeather from './Components/MainContent/YourWeather';
import LoginForm from './Components/MainContent/LoginForm';
import RegisterForm from './Components/MainContent/RegisterForm';
import DetailedCard from './Components/MainContent/DetailedCard';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  
//  const [forecast, setForecast] = useState([]);
 
 
  
//  useEffect(() => {
//     axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.0626&lon=31.2497&exclude=minutely&appid=2252d055e80dd2d34028214774f8cb5e&units=metric')
//     .then(res => {
//        console.log(res.data)
//        setForecast(res.data)
//     }).catch(err => {
//        console.log(err)
//     })
// }, [])

  
const user = {
    firstName:"Dimitri",
    avatarUrl: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
  }
 
  return (
    <div>
      <BrowserRouter>
      <Header user={user}/>
      
      <Routes>
      
      <Route path="/"   element={<SearchLocation />}/>
      <Route path="/random" element={<RandomDetail />}/>
      <Route path="/yourweather" element={<YourWeather />}/>
      <Route path="/detailedcard/" element={<DetailedCard />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegisterForm />}/>
      
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App































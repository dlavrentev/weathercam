import './Style.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchLocation from './Components/MainContent/SearchLocation'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import YourWeather from './Components/MainContent/YourWeather';
import LoginForm from './Components/MainContent/LoginForm';
import RegisterForm from './Components/MainContent/RegisterForm';
import DetailedCard from './Components/MainContent/DetailedCard';
import React, { useState } from 'react';
import { ModeContext } from "./Context/ModeContext"


function App() {
  

  
const user = {
    firstName:"Dimitri",
    avatarUrl: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
  }

const [darkMode,setDarkMode] = useState(false);

const toggleMode = () => {
  setDarkMode(!darkMode)
}
 
  return (
    <div>
      <BrowserRouter>
      <ModeContext.Provider value={{darkMode,setDarkMode}}>
      
      <Header toggleMode={toggleMode} user={user}/>
      
      <Routes>
      
      <Route path="/"   element={<SearchLocation />}/>
      <Route path="/yourweather" element={<YourWeather />}/>
      <Route path="/detailedcard/:cityname" element={<DetailedCard />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegisterForm />}/>
      
      </Routes>
      
      <Footer />
      
      </ModeContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App































import './Style.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FilteredCards from "./Components/MainContent/FilteredCards";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RandomDetail from './Components/MainContent/RandomDetail';
import YourWeather from './Components/MainContent/YourWeather';
import DataFetching from './Components/MainContent/DataFetching';
import LoginForm from './Components/MainContent/LoginForm';
import RegisterForm from './Components/MainContent/RegisterForm';
import data from './CityData';
import React, {useState} from 'react';
import DetailedCard from './Components/MainContent/DetailedCard';


function App() {
  
  const [allcards,setAllNames] = useState([])
  
  const handleFilter=(e) => {
    console.log(e.target.value);
    let filtered = data.filter(item=>item.toLowerCase().includes(e.target.value.toLowerCase()))
    setAllNames(filtered)
  }
  
  const user = {
    firstName:"Dimitri",
    avatarUrl: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
  }


  return (
    <div>
      <BrowserRouter>
      <Header user={user}/>
      
      <Routes>
      
      <Route path="/"   element={<FilteredCards allcards={allcards} handleFilter={handleFilter} />}/>
      <Route path="/random" element={<RandomDetail />}/>
      <Route path="/yourweather" element={<YourWeather />}/>
      <Route path="/detailedcard:cityName" element={<DetailedCard/>}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegisterForm />}/>
      
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App































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



function App() {
  
  
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
      <Route path="/detailedcard" element={<DetailedCard/>}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegisterForm />}/>
      
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App































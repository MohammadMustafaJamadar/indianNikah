
import './App.css';
// import CarouselChangeItems from './Components/carousel/Item';

// import CreateProfile from './Components/Pages/Create_Profile';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './Components/Pages/HomePage';
import NavBar from './Components/Pages/NavBar';
import { useState } from 'react';
import CreateProfile from './Components/Pages/Create_Profile';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
   <>
   <Router>
   <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Routes>
      <Route element={<HomePage  darkMode={darkMode} />} path="/"> </Route>
      <Route element={<CreateProfile darkMode={darkMode}/>} path="/login"></Route>
    </Routes>
   
   </Router>
   
   
   
   
 
   </>
  );
}

export default App;

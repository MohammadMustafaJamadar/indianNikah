import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './Components/Pages/HomePage';
import NavBar from './Components/Pages/NavBar';
import { useState } from 'react';
import FooterComponent from './Components/Pages/FooterComponent';
import MarraigeGuideliness from './Components/Pages/MarraigeGuideliness';
import SearchPage from './Components/Pages/SearchPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
   <>
   <Router>
   <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Routes>
      <Route element={<HomePage  darkMode={darkMode} />} path="/"> </Route>
      <Route element={<MarraigeGuideliness/>} path="guidelines/r/"></Route>
      <Route element={<SearchPage/>} path="/profile/"></Route>
    </Routes>
   <FooterComponent darkMode={darkMode}/>
   </Router>
 
   </>
  );
}

export default App;

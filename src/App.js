import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './Components/Pages/HomePage';
import NavBar from './Components/Navbar components/NavBar';
import { useState } from 'react';
import FooterComponent from './Components/Pages/FooterComponent';
import MarraigeGuideliness from './Components/Pages/MarraigeGuideliness';
import SearchPage from './Components/Pages/SearchPage';
// import NewProfilesOnHome from "./Components/Home Components/NewProfilesOnHome";
import UserProfilePage from "./Components/Pages/UserProfilePage"
import NewProfilePage from "./Components/Pages/NewProfilePage";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route element={<HomePage darkMode={darkMode} />} path="/">
            {" "}
          </Route>
          <Route element={<MarraigeGuideliness />} path="guidelines/r/"></Route>
          <Route element={<SearchPage />} path="/profile/"></Route>
          <Route
            element={<NewProfilePage/>}
            darkMode={darkMode}
            path="/profile/newly-added-profile"
          ></Route>
          <Route
            element={<UserProfilePage/>}

            darkMode={darkMode}
            path="/profile/my-profile"
          ></Route>
        </Routes>
        <FooterComponent darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;

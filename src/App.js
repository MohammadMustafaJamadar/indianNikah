import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import NavBar from "./Components/Navbar components/NavBar";
import { useState } from "react";
import FooterComponent from "./Components/Pages/FooterComponent";
import MarraigeGuideliness from "./Components/Pages/MarraigeGuideliness";
import UserProfilePage from "./Components/Pages/UserProfilePage";
import NewProfilePage from "./Components/Pages/NewProfilePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import ScrollTopButton from "./Components/Pages/ScrollTopButton";
import SearchPage from "./Components/Pages/SearchPage"

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
          <Route element={<SearchPage/>} path="/profiles/"></Route>
          <Route
            element={<NewProfilePage />}
            darkMode={darkMode}
            path="/profiles/newly-added-profiles"
          ></Route>
          <Route
            element={<UserProfilePage />}
            darkMode={darkMode}
            path="/profile/my-profile"
          ></Route>
          <Route
            element={<AboutUsPage />}
            darkMode={darkMode}
            path="/about-us"
          ></Route>
         
        </Routes>
        <ScrollTopButton/>
        <FooterComponent darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;

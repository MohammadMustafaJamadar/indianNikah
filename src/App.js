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
import SearchPage from "./Components/Pages/SearchPage";

function App() {
  const [colors, setColors] = useState({
    green: false,
    blue: false,
    purple: false,
    darkMode:false
  });
  return (
    <>
      <Router>
        <NavBar  colors={colors} setColors={setColors} />
        <Routes>
          <Route element={<HomePage  colors={colors} />} path="/">
            {" "}
          </Route>
          <Route element={<MarraigeGuideliness />} path="guidelines/r/"></Route>
          <Route element={<SearchPage />} path="/profiles/"></Route>
          <Route
            element={<NewProfilePage />}
            darkMode={colors.darkMode}
            path="/profiles/newly-added-profiles"
          ></Route>
          <Route
            element={<UserProfilePage />}
            darkMode={colors.darkMode}
            path="/profile/my-profile"
          ></Route>
          <Route
            element={<AboutUsPage />}
            darkMode={colors.darkMode}
            path="/about-us"
          ></Route>
        </Routes>
        <ScrollTopButton darkMode={colors.darkMode} colors={colors} />
        <FooterComponent darkMode={colors.darkMode} colors={colors} />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import NavBar from "./Components/Navbar components/NavBar";
import { useEffect, useState } from "react";
import FooterComponent from "./Components/Pages/FooterComponent";
import MarraigeGuideliness from "./Components/Pages/MarraigeGuideliness";
import UserProfilePage from "./Components/users/UserProfilePage";
import NewProfilePage from "./Components/Pages/NewProfilePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import ScrollTopButton from "./Components/Pages/ScrollTopButton";
import SearchPage from "./Components/search Components/SearchPage";
import CategoriesPage from "./Components/Categories Component/CategoriesPage";
import QuranAndHadith from "./Components/Pages/QuranAndHadith";
import JobSupport from "./Components/Pages/JobSupport";
import ScholarshipsSupport from "./Components/Pages/ScholarshipsSupport";
import ScholarshipsDetails from "./Components/Pages/ScholarshipsDetails";
import SingleUser from "./Components/users/SingleUser";

function App() {
  const [colors, setColors] = useState({
    green: false,
    blue: false,
    purple: false,
    darkMode: false,
  });
  const [user, setUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(
    "Free Indian Muslim Matrimony (Non-Profit) - IndiaNikah"
  );
  const [whatsAppNumber, setWhatsAppNumber] = useState("");

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  return (
    <>
      <Router>
        <NavBar
          colors={colors}
          setColors={setColors}
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
        <Routes>
          <Route element={<HomePage colors={colors} />} path="/">
            {" "}
          </Route>
          <Route element={<MarraigeGuideliness />} path="guidelines/r/"></Route>
          <Route exact path="/profiles">
            <Route
              path=""
              element={
                <SearchPage
                  darkMode={colors.darkMode}
                  setUser={setUser}
                  isUserLoggedIn={isUserLoggedIn}
                  setDocumentTitle={setDocumentTitle}
                />
              }
            />
            <Route
              path={user.slug}
              element={
                <SingleUser
                  darkMode={colors.darkMode}
                  colors={colors}
                  user={user}
                  isUserLoggedIn={isUserLoggedIn}
                  whatsAppNumber={whatsAppNumber}
                  setWhatsAppNumber={setWhatsAppNumber}
                />
              }
            />
            <Route
              path="my-profile"
              element={
                <UserProfilePage
                  isUserLoggedIn={isUserLoggedIn}
                  darkMode={colors.darkMode}
                  colors={colors}
                  whatsAppNumber={whatsAppNumber}
                  setWhatsAppNumber={setWhatsAppNumber}
                />
              }
            />
            )
          </Route>
          <Route
            element={<NewProfilePage darkMode={colors.darkMode} />}
            path="/profiles/newly-added-profiles"
          ></Route>

          <Route
            element={<AboutUsPage darkMode={colors.darkMode} />}
            path="/about-us"
          ></Route>
          <Route
            element={<CategoriesPage darkMode={colors.darkMode} />}
            path="/profiles/profile-categories"
          ></Route>
          <Route
            element={<QuranAndHadith darkMode={colors.darkMode} />}
            path="/quraan-hadith"
          ></Route>
          <Route
            element={<JobSupport darkMode={colors.darkMode} />}
            path="jobsupport"
          ></Route>
          <Route
            element={<ScholarshipsSupport darkMode={colors.darkMode} />}
            path="scholarship"
          ></Route>
          <Route
            path="scholarship/details"
            element={<ScholarshipsDetails />}
          ></Route>
          <Route exact path="/accounts">
            <Route
              path="login"
              element={<p style={{ marginTop: "100px" }}>Please Login</p>}
            />
          </Route>
        </Routes>
        <ScrollTopButton darkMode={colors.darkMode} colors={colors} />
        <FooterComponent darkMode={colors.darkMode} colors={colors} />
      </Router>
    </>
  );
}

export default App;

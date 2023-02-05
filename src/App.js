import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FamilyInformation from './components/pages/FamilyInformation';
import Login from './components/pages/Login';
import NavBar from './components/pages/NavBar';
import OtpVerify from './components/pages/OtpVerify';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route element={<Login/>} path="account/login/"></Route>
        <Route element={<OtpVerify/>} path="account/login/verify/"></Route>
        <Route element={<FamilyInformation/>} path="profile/create/"></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

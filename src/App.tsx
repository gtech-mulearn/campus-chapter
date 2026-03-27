import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import Achievements from "./Components/Achievements/Achievements";
import TeamMember from "./Components/TeamMember/TeamMember";

// Main homepage component
const HomePage = () => {
    return (
        <>
            <Home />
            <About />
            <Achievements />
            <Events />
            <Gallery />
            <Statistics />
            <ExploreLC />
            <Team />
            <Connect />
            <Footer />
        </>
    );
};

function App() {
    const location = useLocation();
    const needNavbar = location.pathname == '/'
    
    return (
        <div className="appWrapper">
            {needNavbar && <Navbar />}
            <Routes>
                <Route path="/blender-workshop" element={<RedirectToForm />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/team/:memberName" element={<TeamMember />} />
            </Routes>
        </div>
    );
}

function RedirectToForm() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc1D0sBBioSchEqV_lBfCYBsV5jhZ-Nj0SJZeYo6Iu_r-GEsQ/viewform";
    return <div className="redirect-main">
        <div className="progress"></div><br />
    </div>
}

export default App;

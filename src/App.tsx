import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Memories from "./Components/Memories/Memories";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="appWrapper">
      <Home />
      <About />
      <Events />
      <Memories />
      <Statistics />
      <ExploreLC />
      <Team />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;

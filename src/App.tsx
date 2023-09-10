import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";

function App() {

    return (
        <HelmetProvider>
            <Helmet>
                <title>{import.meta.env.VITE_TITLE}</title>
            </Helmet>
            <Navbar />
			<Home />
			<Team />
        </HelmetProvider>
    );
}

export default App;

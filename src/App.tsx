import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Test</title>
            </Helmet>
            <h1>Test</h1>
        </HelmetProvider>
    );
}

export default App;

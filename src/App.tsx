import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/Home";
import { Navbar } from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}
export default App;
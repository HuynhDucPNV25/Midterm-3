import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layouts/Navbar";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import FAQ from "./pages/FAQ/FAQ";
import About from "./pages/About/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/about" component={About} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

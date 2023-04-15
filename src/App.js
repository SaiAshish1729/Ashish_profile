// import "./App.css";
import './Components/Navbar.css'
// import About from "./Components/About";
import Banner from "./Components/Banner";
// import Contact from "./Components/Contact";
// import Navbar from "./Components/Navbar";
// import Skill from "./Components/Skill";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rabout from "./Components/Rabout";
import Rcontact from "./Components/Rcontact";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg" id="NAVBAR">
            <div className="container">
              <Link to="/" className="navbar-brand NAV">
                LOGO
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active HOME mx-4"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link mx-4">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link mx-4">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Banner />
            </Route>

            <Route path="/about">
              <Rabout />
            </Route>
            <Route path="/contact">
              <Rcontact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

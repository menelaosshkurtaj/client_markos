import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Erga from './Erga';
import Services from './Services';
import Contact from './Contact';
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ΕΛΑΙΟΧΡΩΜΑΤΙΣΜΟΙ ΜΑΡΚΟΣ</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">ΑΡΧΙΚΗ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Erga">ΤΑ ΕΡΓΑ ΜΑΣ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">OI ΥΠΗΡΕΣΙΕΣ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">ΕΠΙΚΟΙΝΩΝΙΑ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Erga" element={<Erga />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

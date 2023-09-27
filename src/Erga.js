

import React from 'react';
import './bootstrap.min.css';
import vsimage8 from './erg8.jpg';
import vsimage1 from './erg1.jpg';
import vsimage2 from './erg2.jpg';
import vsimage3 from './erg3.jpg';
import vsimage4 from './erg4.jpg';
import vsimage5 from './erg5.jpg';
import vsimage6 from './erg6.jpg';
import vsimage7 from './erg7.jpg';
import vsimage9 from './erg9.jpg';
import vsimage10 from './erg10.jpg';
import vsimage11 from './erg11.jpg';
import vsimage12 from './ser8.jpg';

const Erga = () => {
    return (
        <div className="container mt-5" style={{ backgroundColor: '#e0e0e0' }}>
        <div className="row mt-4">
          <div className="col-12">
            <h2>TA EΡΓΑ ΜΑΣ</h2>
            <p>
              Στην εταιρεία μας, δίνουμε ιδιαίτερη προσοχή στις εργασίες ελαιοχρωματισμού. Κάθε έργο που αναλαμβάνουμε γίνεται με ακρίβεια, υπευθυνότητα και επαγγελματισμό. Οι τεχνικές που χρησιμοποιούμε είναι σύγχρονες και προσφέρουν ένα αρτιότατο αποτέλεσμα, ενώ τα υλικά που επιλέγουμε είναι πάντα από τους κορυφαίους προμηθευτές.
            </p>
          </div>
        </div>
        
<div style={{ width: '100%', height: '600px', margin: '0 auto', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'  }}>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={vsimage12} className="d-block w-100" alt="Έργο 1" />
            </div>
            <div className="carousel-item">
                <img src={vsimage2} className="d-block w-100" alt="Έργο 2" />
            </div>
            <div className="carousel-item">
                <img src={vsimage11} className="d-block w-100" alt="Έργο 3" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
<div className="row mt-4">
  {/* Πρώτη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage4} alt="Φωτογραφία 1" className="img-fluid square-image"/>
  </div>

  {/* Δεύτερη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage9} alt="Φωτογραφία 2" className="img-fluid square-image"/>
  </div>

  {/* Τρίτη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage6} alt="Φωτογραφία 3" className="img-fluid square-image"/>
  </div>

  {/* Τέταρτη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage7} alt="Φωτογραφία 4" className="img-fluid square-image"/>
  </div>

  {/* Πέμπτη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage8} alt="Φωτογραφία 5" className="img-fluid square-image"/>
  </div>

  {/* Έκτη φωτογραφία */}
  <div className="col-12 col-md-4">
    <img src={vsimage5} alt="Φωτογραφία 6" className="img-fluid square-image"/>
  </div>
  <div className="col-12 col-md-4">
    <img src={vsimage10} alt="Φωτογραφία 6" className="img-fluid square-image"/>
  </div>
  <div className="col-12 col-md-4">
    <img src={vsimage11} alt="Φωτογραφία 6" className="img-fluid square-image"/>
  </div>
  <div className="col-12 col-md-4">
    <img src={vsimage1} alt="Φωτογραφία 6" className="img-fluid square-image"/>
  </div>
  {/* Και ούτω καθεξής για τις υπόλοιπες φωτογραφίες */}
</div>










        
  
        

        <footer className="mt-5 p-4 bg-dark text-white">
<div className="container text-center">
    <p>&copy; {new Date().getFullYear()} Ελαιοχρωματισμοί Μάρκος Σκούρτης. Όλα τα δικαιώματα διατηρούνται.</p>
    <p>
        <a href="/terms-of-service" className="text-white mr-4">Όροι Χρήσης</a> 
        | 
        <a href="/privacy-policy" className="text-white ml-4">Πολιτική Απορρήτου</a>
        
    </p>
</div>
</footer>
      </div>
    );
  }
  
  export default Erga;
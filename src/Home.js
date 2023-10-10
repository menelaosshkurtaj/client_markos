

import React from 'react';
import './bootstrap.min.css';
import vsImage from './vs3.jpg';
import vsImage1 from './vs4.jpg';
import vsimage2 from './vs2.jpg';
import vsimage3 from './ser7.jpg';
import vsimage4 from './ser8.jpg';
import vsimage5 from './vs7.png';
import vsimage6 from './vs8.png';
import vsimage7 from './vs9.png';
import logo from './LOGO.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => (

    
    



   



<div className="container mt-5" style={{ backgroundColor: '#e0e0e0' }}>



<div className="container mt-5 text-center">
  <div className="d-md-flex align-items-center">
    <img src={logo} alt="Εικόνα" className="mb-4 mb-md-0" />
    <div className="text-center text-md-left ml-4">
    <h1 style="visibility: hidden;">Ελαιοχρωματισμοί Μάρκος</h1>
       <div className="phone-box p-2">
    ΤΗΛ.ΕΠΙΚΟΙΝΩΝΙΑΣ: 
    <a href="tel:6938428035" className="phone-number mr-2">6938428035</a>-
    <a href="tel:6949797189" className="phone-number">6949797189</a>
      </div>
    </div>
  </div>
</div>



<div style={{ width: '90%', margin: '0 auto', overflow: 'hidden', height: window.innerWidth <= 767 ? '200px' : '500px' }}>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={vsImage} className="d-block w-100" alt="Έργο 1" />
      </div>
      <div className="carousel-item">
        <img src={vsImage1} className="d-block w-100" alt="Έργο 2" />
      </div>
      <div className="carousel-item">
        <img src={vsimage2} className="d-block w-100" alt="Έργο 3" />
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

<div className="container my-5">

<div className="container my-5">
  <div className="row mt-4">
    <div className="col-12 text-center">
      <div className="phone-box p-2">
    ΤΗΛ.ΕΠΙΚΟΙΝΩΝΙΑΣ: 
    <a href="tel:6938428035" className="phone-number mr-2">6938428035</a>-
    <a href="tel:6949797189" className="phone-number">6949797189</a>
      </div>
    </div>
  </div>
</div>
{/* Πρώτη σειρά: "Λίγα λόγια για μας" και εικόνα */}
<div className="row mb-4">
  <div className="col-md-6">
    <h3>ΛΙΓΑ ΛΟΓΙΑ ΓΙΑ ΤΗΝ ΕΤΑΙΡΕΙΑ ΕΛΑΙΟΧΡΩΜΑΤΙΣΜΟΙ ΜΑΡΚΟΣ ΣΚΟΥΡΤΗΣ</h3>
    <p>Στο συνεργείο ελαιοχρωματισμού Μάρκος Σκούρτης, το χρώμα είναι πολλά περισσότερα από μια απλή επιφανειακή εφαρμογή. Είναι η ψυχή που προσδίδει ζωή σε κάθε χώρο. Με περισσότερα από 25 χρόνια εμπειρίας στο χώρο, κατανοούμε την αξία της ποιότητας, της λεπτομέρειας και της ακρίβειας. Κάθε εργασία που αναλαμβάνουμε είναι μια αποτύπωση της αφοσίωσης και του πάθους μας για την τέχνη του ελαιοχρωματισμού. Επιλέγοντας το συνεργείο μας, επιλέγετε την ανωτερότητα, την εμπειρία και την εγγύηση μιας δουλειάς που θα αντέχει στον χρόνο.</p>
  </div>
  <div className="col-md-6">
    <img src={vsimage3} alt="Εικόνα της εταιρείας σας" className="img-fluid" />
  </div>
</div>

{/* Δεύτερη σειρά: Εικόνα και "Υπηρεσίες μας" */}
<div className="row mb-4">
  <div className="col-md-6">
    <img src={vsimage4} alt="Εικόνα των υπηρεσιών μας" className="img-fluid" />
  </div>
  <div className="col-md-6">
    
    <p>Το συνεργείο μας εκπαιδεύεται συνεχώς στη χρήση των νέων υλικών και στην τεχνική κατεργασία τους. Επίσης υπάρχει διαρκής κατάρτιση και ενημέρωση μέσω σεμιναρίων πάνω στις εξελίξεις στο επαγγελματικό τομέα μας, με αποτέλεσμα να παρέχουμε μέσα από την τεχνογνωσία μας, λύσεις με επιθυμητό κόστος σε κάθε εργασία που αναλαμβάνουμε.

Είμαστε στην θέση να αναλάβουμε οποιαδήποτε εργασία και να σας προτείνουμε τους καλύτερους χρωματικούς συνδυασμούς.  Τα υλικά που χρησιμοποιούμε είναι εξαιρετικής ποιότητας και αντοχής και διατηρούμε τον χώρο εργασίας καθαρό. Επίσης στα πλαίσια των εργασιών μας, το συνεργείο μας μπορεί να σας προσφέρει ολοκληρωμένες υπηρεσίες πάνω στην κατασκευή ή στην ανακαίνιση του χώρου σας με γυψοσανίδες και στην τοποθέτηση πλακιδίων.

Είμαστε στην διάθεση σας – Καλέστε μας άμεσα!</p>
<h2>ΛΙΓΑ ΛΟΓΙΑ ΓΙΑ ΕΜΑΣ</h2>
          <h3>ΕΠΑΓΓΕΛΜΑΤΙΣΜΟΣ</h3>
          <p>
            Αναλαμβάνουμε ανακαινίσεις επαγγελματικών χώρων και ανακαινίσεις κατοικιών, παντός τύπου ελαιοχρωματισμού εσωτερικών και εξωτερικών χώρων, οικιών και επαγγελματικών χώρων, τεχνοτροπίες, λούστρα δαπέδων, τοποθετήσεων γυψοσανίδας, θερμοπρόσοψη, τοποθέτησης πλακιδίων, τοποθέτηση ταπετσαρίας, πατητές τσιμεντοκονίες, εποξειδικές βαφές και υγρομόνωσης ταράτσας. Σκοπός μας είναι η εξυπηρέτηση των πελατών μας, φέρνοντας στο χώρο σας ένα άριστο αποτέλεσμα.
          </p>
          <h3>Συνεπεια</h3>
          <p>
            Κάθε εργασία έχει το δικό της χρονοδιάγραμμα. Η αυτοματοποίηση των εργασιών μας, μας επιτρέπει την παράδοση ολοκληρωμένων έργων στον συμφωνηθέντα χρόνο, χωρίς καθυστερήσεις.
          </p>
          <h3>Λογικες τιμες</h3>
          <p>
            Οι τιμές μας διαμορφώνονται με βάση συγκεκριμένους παράγοντες: τα τετραγωνικά μέτρα, την κατάσταση των τοίχων, το κόστος των υλικών και τις τεχνοτροπίες βαψίματος. Προσφέρουμε λογικές τιμές σε συνδυασμό με άριστο αποτέλεσμα.
          </p>

  </div>
</div>

{/* Τρίτη σειρά: "Η εγγύησή μας" */}

</div>


<div className="container my-5">
  <div className="row mt-4">
    <div className="col-12 text-center">
      <div className="phone-box p-2">
    ΤΗΛ.ΕΠΙΚΟΙΝΩΝΙΑΣ: 
    <a href="tel:6938428035" className="phone-number mr-2">6938428035</a>-
    <a href="tel:6949797189" className="phone-number">6949797189</a>
      </div>
    </div>
  </div>
</div>





        <div className="row mt-4">
            <div className="col-md-4">
                <img src={vsimage5} alt="Έργο 1" className="img-fluid mb-3" />
            </div>
            <div className="col-md-4">
                <img src={vsimage6} alt="Έργο 2" className="img-fluid mb-3" />
            </div>
            <div className="col-md-4">
                <img src={vsimage7} alt="Έργο 3" className="img-fluid mb-3" />
            </div>
        </div>

<footer className="mt-5 p-4 bg-dark text-white">
<div className="container text-center">
    <p>&copy; {new Date().getFullYear()}  Ελαιοχρωματισμοί Μάρκος Σκούρτης. Όλα τα δικαιώματα διατηρούνται.</p>
    <p>
        <a href="/terms-of-service" className="text-white mr-4">Όροι Χρήσης</a> 
    
        <a href="/privacy-policy" className="text-white ml-4">Πολιτική Απορρήτου</a>
        
    </p>
</div>
</footer>
    </div>

  
 

    
);

export default Home;

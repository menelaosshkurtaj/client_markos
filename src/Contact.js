
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Στείλτε τα στοιχεία της φόρμας στο email menelaos_skurtis@gmail.com
    const emailContent = `Όνομα: ${name}\nEmail: ${email}\nΤηλέφωνο: ${phone}\nΜήνυμα: ${message}`;
    window.location.href = `mailto:menelaoosskurtis@gmail.com?subject=Αίτημα%20προσφοράς&body=${emailContent}`;
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: '#e0e0e0' }}>
      
      <div className="contact-info-box">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>Στοιχεια Επικοινωνιας</h1>
            <p>Τηλέφωνο: <a href="tel:ΤΟ-ΤΗΛΕΦΩΝΟ">6938428035</a></p>
            <p>Email: <a href="mailto:ΤΟ-EMAIL-ΣΑΣ">:menelaoosskurtis@gmail.com</a></p>
            <p>Διεύθυνση: ΙΩΑΝΝΗ ΖΑΧΑΡΙΑ 24 ΠΑΙΑΝΙΑ </p>
          </div>
        </div>
      </div>
      <Container className="mt-5">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Όνομα</Form.Label>
            <Form.Control
              type="text"
              placeholder="Εισάγετε το όνομά σας"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Εισάγετε το email σας"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Τηλέφωνο</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Εισάγετε το τηλέφωνό σας"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Μήνυμα</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Εισάγετε το μήνυμά σας"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Αποστολή
          </Button>
        </Form>
      </Container>
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
};

export default Contact;

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Contact() {
  return (
    <div><h3>Contact Us</h3>
    <Form className="form" style={{width: '50rem'}}>
      <div className="contactText">
      <p>Contact us and we will get back to you within 24 hours.</p>
      <p>Company Name</p>
      <p>+256 778 800 900</p>
      <p>company.gmail.com</p>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Contact</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Button variant="primary" type="submit">
        submit
        </Button>
      </Form.Group>
    </Form>
    </div>
  );
}

export default Contact;
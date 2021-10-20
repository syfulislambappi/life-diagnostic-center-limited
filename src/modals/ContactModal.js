// dependencies
import { Modal, Button } from 'react-bootstrap'

function ContactModal({ name, email, text, show, setShow }) {
    
    return (
        <div>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Your message has been received</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><span className="fw-bold">Name:</span> {name}</p>
              <p><span className="fw-bold">Email:</span> {email}</p>
              <p><span className="fw-bold">Message:</span> {text}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default ContactModal;
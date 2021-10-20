// dependencies
import { Modal, Button } from 'react-bootstrap'

function AppointmentModal({ show, setShow }) {
    
    return (
        <div>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Your doctors appointment is recorded.</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default AppointmentModal;
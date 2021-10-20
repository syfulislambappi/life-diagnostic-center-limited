// dependencies
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Doctor({ doctor }) {
    const history = useHistory()

    // destructure doctors info
    const { name, title, image } = doctor;

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
              <Card.Footer>
                <Button variant="dark" onClick={() =>history.push('/appointment')}>Make Appointment</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Doctor;

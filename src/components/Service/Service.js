// dependencies
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Service({ service }) {
    const history = useHistory()

    // destructure service info
    const { name, description, image, id } = service;
    
    const handleHistoy = id => history.push(`/service/${id}`)

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>{`${description.substring(0, 105)} ...`}</Card.Text>
              <Card.Footer>
                <Button variant="dark" onClick={() =>handleHistoy(id)}>Details</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Service;

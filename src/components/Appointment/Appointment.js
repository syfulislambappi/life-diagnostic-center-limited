import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import useDoctors from '../../hooks/useDoctors'
import AppointmentModal from '../../modals/AppointmentModal'

const Appointment = () => {
    const [show, setShow] = useState(false)
    const {doctors} = useDoctors()

    // extract doctors name
    const doctorTitles = doctors.map(doctor => <option key={doctor.id}>{doctor.title}</option>)

    return (
        <Container className="my-5">
            <AppointmentModal show={show} setShow={setShow} />
            <h2 className="mb-5 text-center">Make an Appointment</h2>
            <Form onSubmit={e => e.preventDefault()}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Control type="text" placeholder="Full name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control type="email" placeholder="Email address" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Control type="date" required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Select defaultValue="General Health" required>
                            {[...doctorTitles]}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Address" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows="4" placeholder="Enter Message..." required/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => setShow(true)}>
                    Make Appointment
                </Button>
            </Form>
        </Container>
    )
}

export default Appointment

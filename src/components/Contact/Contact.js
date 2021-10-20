import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import ContactModal from '../../modals/ContactModal'
import Download from '../Download/Download'
const contactImageUri = `https://image.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg`

const Contact = () => {
    // hooks for input fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    // hooks for modal
    const [show, setShow] = useState(false)

    return (
        <>
        <ContactModal name={name} email={email} text={text} show={show} setShow={setShow} />
        <Container className="py-4">
          <h2 className="text-center mb-5">Contact With Us</h2>
          <Row>
            <Col lg='6' className="mb-5">
              <img src={contactImageUri} alt='Contact' className="d-block mw-100" />
            </Col>
            <Col lg='6'>
              <Form onSubmit={e => e.preventDefault()}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Control type="text" placeholder="Enter your name" onBlur={e => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Control type="email" placeholder="Enter your email" onBlur={e => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Text">
                  <Form.Control as="textarea" placeholder="Enter your problem..." rows="3" onBlur={e => setText(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => setShow(true)}>
                  Contact
                </Button>
              </Form>
                </Col>
            </Row>
        </Container>
        <Download />
        </>
    )
}

export default Contact

import { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { NavLink, Redirect } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Download from "../Download/Download"
import './Login.css'
const loginImage = `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`

const googleIcon = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png`

const Login = () => {
    // hooks for email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // sign in function from custom hooks
    const {emailSignIn, googleSignIn, error, user} = useAuth()

    return (
        <>
        {user.displayName ? <Redirect to="/" /> : <Redirect to='/login' />}
        <Container className="py-4">
            <Row>
                <Col lg='6' className="mb-5">
                    <img src={loginImage} alt='' className="d-block mw-100" />
                </Col>
                <Col lg='6'>
                    <div className="d-flex align-items-center">
                        <h5 className="me-3">Login with</h5>
                        <div>
                            <button onClick={googleSignIn} className="login-icons"><img src={googleIcon} alt="google" className="google-icon"/></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <div className="line"></div>
                        <p className="fw-bold mx-3">Or</p>
                        <div className="line"></div>
                    </div>
                    <Form onSubmit={e => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" onBlur={e => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={e => setPassword(e.target.value)} required />
                        </Form.Group>
                        {error ? <p className="text-danger">{error}</p> : ''}
                        <Button variant="primary" type="submit" onClick={() => emailSignIn(email, password)}>
                            Login
                        </Button>
                    </Form>
                <h6 className='mt-4'>Don't have an Account? <NavLink to='/register' className="text-danger">Register</NavLink></h6>
                </Col>
            </Row>
        </Container>
        <Download />
        </>
    )
}

export default Login

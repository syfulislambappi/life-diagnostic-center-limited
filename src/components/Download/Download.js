import { Container, Row, Col, Image } from 'react-bootstrap'
import google from '../../images/google_play.svg';
import apple from '../../images/app_store.svg';
import app from '../../images/mobile_app.png'
import './Download.css';
import { NavLink } from 'react-router-dom';

const Download = () => {
  return (
    <div className="download-section banner-home bg-image">
      <Container className="py-5 py-lg-0">
        <Row className="align-items-center">
          <Col lg="4">
            <div className="img-banner d-none d-lg-block">
              <Image src={app} alt="app mobile" />
            </div>
          </Col>
          <Col lg="8">
            <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
            <NavLink to="/" className="mb-2 me-3 d-block"><img src={google} alt="play store" /></NavLink>
            <NavLink to="/" className="d-block"><img src={apple} alt="app store" /></NavLink>
          </Col>  
        </Row>
      </Container>
    </div>
    )
}

export default Download

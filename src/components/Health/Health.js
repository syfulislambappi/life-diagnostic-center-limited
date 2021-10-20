import React from 'react'
import './Health.css'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import doctorImage from '../../images/bg-doctor.png'

const Health = () => {

    return (
    <div className="page-section pb-0">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="py-3">
            <h1>Welcome to Your Health <br /> Center</h1>
            <p className="text-grey mb-4">Health centers are community-based and patient-directed organizations that deliver comprehensive, culturally competent, high-quality primary health care services to the nation’s most vulnerable individuals and families, including people experiencing homelessness, agricultural workers, residents of public housing, and veterans.</p>
            <NavLink className="btn btn-primary" to="/blogs">Blogs</NavLink>
          </Col>
          <Col lg="6">
            <div className="img-place custom-img-1">
              <img src={doctorImage} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default Health

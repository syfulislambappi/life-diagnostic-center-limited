// dependencies
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useServices from '../../hooks/useServices';

function Services() {
    const {services} = useServices()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our Services</h2>
                <p className="text-center mb-4">We Provide lots of services with digital machines imported from USA and Japan</p>
                <Row>
                    {services.map(service => <Service key={service.id} service={service} />)}
                </Row>
            </Container>
        </section>
    )
}

export default Services;
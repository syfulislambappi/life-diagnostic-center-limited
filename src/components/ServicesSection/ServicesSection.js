// dependencies
import { Container, Row } from 'react-bootstrap'
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

function ServicesSection() {
    const {services} = useServices()
    
    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our Services</h2>
                <p className="text-center mb-4">We Provide lots of services with digital machines imported from USA and Japan</p>
                <Row>
                    {services.slice(0, 4).map(service => <Service key={service.id} service={service} />)}
                </Row>
            </Container>
        </section>
    )
}

export default ServicesSection;

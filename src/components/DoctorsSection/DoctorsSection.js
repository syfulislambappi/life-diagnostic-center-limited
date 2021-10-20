// dependencies
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../../hooks/useDoctors';

function DoctorsSection() {
    const {doctors} = useDoctors()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our Doctors</h2>
                <p className="text-center mb-4">We Provide lots of services with digital machines imported from USA and Japan</p>
                <Row>
                    {doctors.slice(0, 3).map(doctor => <Doctor key={doctor.id} doctor={doctor} />)}
                </Row>
            </Container>
        </section>
    )
}

export default DoctorsSection;
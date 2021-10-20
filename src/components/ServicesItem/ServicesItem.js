import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import useServices from '../../hooks/useServices'

const ServicesItem = () => {
    const {serviceId} = useParams()
    const {services} = useServices()
    const service = services.find(item => item.id === serviceId)
    return (
        <Container className="py-5">
            <div className="w-50 rounded-3 border overflow-hidden p-2">
                <img className="mw-100" src={service?.image} alt={service?.name} />
            </div>
            <h2 className="my-3">{service?.name}</h2>
            <p>{service?.description}</p>
        </Container>
    )
}

export default ServicesItem

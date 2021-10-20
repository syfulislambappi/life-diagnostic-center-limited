// dependencies
import './Hero.css';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';

function Hero() {
    const history = useHistory();

    const goToService = () => history.push('/services');
    
    return (
        <section className="hero-section">
            <div className="w-75 text-center hero-content">
                <h1 className="text-white display-5 fw-bold">Life Diagnostic Center Limited</h1>
                <p className="text-white">Our First Priority is to give well service to our patients. Our patients are our neighbours not a number. Our diagnosis machines are qualified and imported from Japan and USA.</p>
                <Button variant="outline-light" className="fw-bold" onClick={goToService}>Explore</Button>
            </div>
        </section>
    )
}

export default Hero;
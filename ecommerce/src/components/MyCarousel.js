import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import './MyCarousel.css';

export default function MyCarousel() {
    const navigate = useNavigate();

    return ( 
            <Carousel className='w-100' variant='dark'>
                <Carousel.Item interval={1400}
                    onClick={() => {navigate('/products/mac')}}
                >
                    <img
                    className="d-block w-75 m-auto"
                    src="carousel/home-carousel1.webp"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1400}
                    onClick={() => {navigate('/products/a53')}}
                >
                    <img
                    className="d-block w-75 m-auto"
                    src="carousel/home-carousel2.webp"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1400}
                    onClick={() => {navigate('/products/yoga')}}
                >
                    <img
                    className="d-block w-75 m-auto"
                    src="carousel/home-carousel3.webp"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        
      );
}
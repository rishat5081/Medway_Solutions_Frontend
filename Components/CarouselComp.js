import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComp = ({ data }) => {
    const colorTag = {
        color: "#090506"
    }
    return (
        <React.Fragment>
            <img
                className="d-block w-100"
                src={"./" + data.image}
                width="auto"
                height="500px"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3 style={colorTag}>{data.title}</h3>
                <p style={colorTag}>{data.description}.</p>
            </Carousel.Caption>
        </React.Fragment>
    )
}

export default CarouselComp

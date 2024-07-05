import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = ({ images }) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    console.log(process.env.PUBLIC_URL);

    return (
        <div className='image-slider'>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
            >
                {images.map(image => (
                    <Carousel.Item>
                        <div className='image-container'>
                            <img
                                className='image'
                                alt={`src`}
                                src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}
                                onClick={() => window.open(`${process.env.PUBLIC_URL}/assets/images/${image.src}`, '_blank')}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider;
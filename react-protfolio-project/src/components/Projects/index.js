import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import LogoS from '../../assets/images/logo-k.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Импортируйте стили из библиотеки
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
  
    const toggleDescription = () => {
      setDescriptionVisible(!isDescriptionVisible);
    };
  
    const images = [
      require('../../assets/images/logo-k.png'),
      require('../../assets/images/logo-k.png'),
      require('../../assets/images/logo-k.png'),
    ];
  
    return (
      <>
        <div className='container projects-page'>
          <div className='text-zone'>
            <h1>
              <AnimatedLetters
                strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j','e','c','t','s']}
                idx={15}
              />
            </h1>
          </div>
          <div className='projects'>
            <Carousel
              selectedItem={activeImageIndex}
              onChange={index => setActiveImageIndex(index)}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    className='project-image'
                    src={image}
                    alt={`Project ${index}`}
                    onClick={() => toggleDescription()}
                  />
                  {isDescriptionVisible && (
                    <div className='description'>
                      <p>Описание изображения #{index + 1}</p>
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </>
    );
  };
  
  export default Projects;
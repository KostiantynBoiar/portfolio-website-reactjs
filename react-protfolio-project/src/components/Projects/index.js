import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import LogoS from '../../assets/images/logo-k.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import Loader from 'react-loaders';
import { Link, Routes } from 'react-router-dom';

const Projects = () => {

    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
  
    const toggleDescription = () => {
      setDescriptionVisible(!isDescriptionVisible);
    };

    const handleClickImage = (index) => {
        window.location.href = `/project-${index + 1}`;
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
            <p>
            On this page you can see my works which show what I was working on, when you click on the image you will see another page where there will be a description of the project,
            a technology stack and a link to the project itself
            </p>
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
                    onClick={() => {
                    toggleDescription();
                    handleClickImage(index);
                    }}
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
        <Loader type='pacman'/>
      </>
    );
  };
  
  export default Projects;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { faAngular, faGithub, faJava, faJs, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {


    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                strArray={['A','b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
                </h1>
                <p>
                    I am a very ambitious software developer who is looking for a job in the field of information technology 
                    with opportunities for professional growth.
                    </p>
                <p align="LEFT">I am smart, easy to train and love to solve interesting problems. I'm interested in advanced programming and computer science.</p>
                <p>I am studying at a university on a cybersecurity course and at another university on a computer technology course,
                     and at the same time I am studying and deepening my knowledge in areas that interest me</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJs} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>

        </>
    )
}

export default About
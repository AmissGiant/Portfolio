import { useEffect, useState } from 'react'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    My name is Alex Dodson and I am a computer science major at Rutgers university. 
                    I enjoy coding all kinds of things using Java, JavaScript, C, CSS, React, Git and 
                    many other softwares.
                </p>
                <p>
                    I have primarily used Java throughout my studies and many of my projects, however I 
                    also have experience with JavaScript, CSS and React which I used for this website. 
                    I even have some experience using game desing software such as unreal engine and Unity.
                </p>
                <p>
                    I am interested in frontend development, web development and game development. I would like to 
                    work on something I am passionate in and all of these things fall under that category.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple" />
        </>
    )
}

export default About

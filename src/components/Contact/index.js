import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hh6gwzf', 'template_oobd09q', form.current, {
            publicKey: 'SVWYj2rEkgjqUNVjv',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                     <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                     </h1>
                     <p>
                        Please feel free to reach out with any questions
                     </p>
                     <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>

                        </form>
                     </div>
                </div>
                <div className='info-map'>
                  Alex Dodson,
                  <br />
                  United States,
                  <br />
                  Mount Laurel, 08054 <br />
                  <span>dodson.w.alex@gmail.com</span>
                </div>
                <div className='map-wrap'>
                  <MapContainer center={[39.9340, -74.8910]} zoom={10}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[39.9340, -74.8910]}>
                      <Popup>
                        Alex lives here, for now at least
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-ripple"/>
        </>
    )
}

export default Contact

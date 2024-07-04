import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';

const Logo = () => {
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
        scale: 0.5,
        rotate: -45,
        y: -100,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 15,
        y: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.5)',
      }
    );
  }, []);

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
};

export default Logo;
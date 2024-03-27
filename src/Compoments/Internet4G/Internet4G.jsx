import React, { useEffect, useState } from "react";
import "./Internet4G.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Internet4G() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>

    <div className={`fourBody ${animate ? 'animate-in' : ''}`}>
        <h1>4G Internet</h1>
      <p>
        {" "}
        Enjoy high-speed internet anywhere with our portable rechargeable
        router—no landline required. Stay connected on-the-go with ease. Explore
        now!
      </p>
        </div>
     
    
    <div className={`int-bodys ${animate ? 'animate-in' : ''}`}>
    <div className="cardis">
        <h2>Plans</h2>
        <ul>
          <li>
            <span className="left-content">25GB</span>
            <span className="price"></span>
          </li>
          <li>
            <span className="left-content">50GB</span>
            <span className="price"></span>
          </li>
          <li>
            <span className="left-content">100GB</span>
            
          </li>
          <li>
            <span className="left-content">250GB</span>
            <span className="price"></span>
          </li>
        
        </ul>
      </div>
      
        
    </div>
 
    <div className="contact-infos">
        <p>For inquiries, contact us at:</p>
        <a href="https://wa.me/+9613602789" target="_blank" rel="noreferrer" className="contact-number">
          <FontAwesomeIcon icon={faPhone} /> +961 3 602 789
        </a>
      </div>
    </>
    
  );
}

export default Internet4G;

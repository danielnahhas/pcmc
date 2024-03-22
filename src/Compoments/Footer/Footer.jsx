import React from 'react';
import './Footer.css';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='foot-container'>
    <div className='foot-body'>
      <div>
        <h2>Web Development</h2>
        <a href='https://wa.me/+96171038008' target="_blank"><FontAwesomeIcon icon={faPhone} /> +961 71 038 008</a>
      </div>
      <div>
        <h2>Internet (ISP)</h2>
        <a href='https://wa.me/+9613898007' target="_blank"><FontAwesomeIcon icon={faPhone} /> +961 3 898 007</a>
      </div>
      <div>
        <h2>Internet (DSL)</h2>
        <a href='https://wa.me/+9613602789' target="_blank"><FontAwesomeIcon icon={faPhone} /> +961 3 602 789</a>
        
      </div>
    </div>
    </div>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./WebDevelopment.css";

function WebDevelopment() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`web-body ${animate ? 'animate-in' : ''}`}>
      <h1>Website Development</h1>
      <p className="intro">
        Your website isn't just a URL. It’s an essential component of your
        marketing and business strategy. It’s an extension of your brand and a
        virtual experience for your consumers. When you’re choosing a website
        developer, you need someone you can trust to execute every aspect to the
        highest level of quality. Don’t worry: no matter your company, product,
        or customers, we curate a multi-platform, omnichannel experience
        seamlessly.
      </p>

      <div className="capabilities">
        <h2>Capabilities:</h2>
        <ul>
          <li>E-commerce</li>
          <li>Informative Websites</li>
          <li>Web App Development</li>
        </ul>
      </div>

      <div className="price-card">
        <div className="price-bg">
          <h2>Starting Price:</h2>
          <p>$249</p>
        </div>
      </div>

      <div className="contact-infow">
        <p>For More Info, Contact Us At:</p>
        <a href="https://wa.me/+96171038008" target="_blank" rel="noreferrer" className="contact-number">
  <FontAwesomeIcon icon={faPhone} /> +961 71 038 008
</a>

      </div>
    </div>
  );
}

export default WebDevelopment;

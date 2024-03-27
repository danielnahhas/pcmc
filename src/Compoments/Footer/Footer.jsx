import React from "react";
import "./Footer.css";

// Importing Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope  } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="foot-container">
      <div className="foot-body">
        <div className="location-wrapper">
          <a
            href="https://www.google.com/maps/place/pcmc/@33.8054557,35.4969895,17z/data=!3m1!4b1!4m6!3m5!1s0x151f1972b7b16845:0x7dbd3f03120a5721!8m2!3d33.8054513!4d35.4995644!16s%2Fg%2F1232pbzn5?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="location-content">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="location-icon"
              />
              <div className="location-details">
                <h2>Location:</h2>
                <p>
                  {" "}
                  <span style={{ fontWeight: "600" }}>PCMC</span>, Chouaifet El
                  Aamroussieh, Lebanon
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="contact-section">
          <div className="contact-item">
            <h2>Web Development</h2>
            <a
              href="https://wa.me/+96171038008"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} /> +961 71 038 008
            </a>
          </div>
          <div className="contact-item">
            <h2>Internet (ISP)</h2>
            <a
              href="https://wa.me/+9613898007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} /> +961 3 898 007
            </a>
          </div>
          <div className="contact-item">
            <h2>Internet (DSL & 4G)</h2>
            <a
              href="https://wa.me/+9613602789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} /> +961 3 602 789
            </a>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <a
              href="mailto:pcmc.nahhas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope } /> pcmc.nahhas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import "./InternetIsp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function InternetIsp() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className={`fourBody ${animate ? "animate-in" : ""}`}>
        <h1>Internet (ISP)</h1>
        <p>
          {" "}
          ISP offers internet connectivity to users. It provides access to the World
          Wide Web, email, and other online services.
        </p>
      </div>
      <div className={`int-body ${animate ? "animate-in" : ""}`}>
        <div className="cardi">
          <h2>BUNDLES</h2>
          <ul>
            <li>
              <span className="left-content">6M - 8M</span>
              <span className="price">$30</span>
              <span>/MO</span>
            </li>
            <li>
              <span className="left-content">7M - 10M</span>
              <span className="price">$35</span>
              <span>/MO</span>
            </li>
            <li>
              <span className="left-content">8M - 12M</span>
              <span className="price">$45</span>
              <span>/MO</span>
            </li>
            <li>
              <span className="left-content">9M - 16M</span>
              <span className="price">$55</span>
              <span>/MO</span>
            </li>
            <li>
              <span className="left-content">15M - 30M</span>
              <span className="price">$75</span>
              <span>/MO</span>
            </li>
            <li>
              <span className="left-content">30M - 50M</span>
              <span className="price">$120</span>
              <span>/MO</span>
            </li>
          </ul>
        </div>

        <div className="additional-content">
          <div className="upgrade-card">
            <h3>UPGRADES</h3>
            <div className="upgrade-option">
              <div className="cardi">
                <h2>Gaming</h2>
                <div className="price-container">
                  <span className="price">$15</span>
                  <span className="price-sign">/MO</span>
                </div>
              </div>
              <div className="cardi">
                <h2>Real IP</h2>
                <div className="price-container">
                  <span className="price">$25</span>
                  <span className="price-sign">/MO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p>For More Info, Contact Us At:</p>
          <a
            href="https://wa.me/+9613898007"
            target="_blank"
            rel="noreferrer"
            className="contact-number"
          >
            <FontAwesomeIcon icon={faPhone} /> +961 3 898 007
          </a>
        </div>
      </div>
    </>
  );
}

export default InternetIsp;

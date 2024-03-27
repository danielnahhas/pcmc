import React, { useEffect, useState } from "react";
import "./InternetDsl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function InternetDsl() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className={`fourBody ${animate ? "animate-in" : ""}`}>
        <h1>Internet (DSL)</h1>
        <p>
          {" "}
          internet service provides high-speed internet access via traditional
          telephone lines. It offers reliable connectivity suitable for both
          residential and business use.
        </p>
      </div>
      <div className={`int-bodyd ${animate ? "animate-in" : ""}`}>
        <div className="cardid">
          <h2>lebanese Army</h2>
          <ul>
            <li>
              <span className="left-content">4M</span>
              <span className="price">60GB</span>
            </li>
            <li>
              <span className="left-content">Max Speed</span>
              <span className="price">110GB</span>
            </li>
            <li>
              <span className="left-content">4M</span>
              <span className="price">Unlimited</span>
            </li>
            <li>
              <span className="left-content">8M</span>
              <span className="price">Unlimited</span>
            </li>
          </ul>
        </div>
        <div className="cardid">
          <h2>Plan 1</h2>
          <ul>
            <li>
              <span className="left-content">4M</span>
              <span className="price">60GB</span>
            </li>
            <li>
              <span className="left-content">Max Speed</span>
              <span className="price">110GB</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">180GB</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">320GB</span>
            </li>
            <li>
              <span className="left-content">4M </span>
              <span className="price"> Unlimited</span>
            </li>
            <li>
              <span className="left-content">8M </span>
              <span className="price"> Unlimited</span>
            </li>
          </ul>
        </div>
        <div className="cardid">
          <h2>Plan 2</h2>
          <ul>
            <li>
              <span className="left-content">4M</span>
              <span className="price">50GB</span>
            </li>
            <li>
              <span className="left-content">4M</span>
              <span className="price">100GB</span>
            </li>
            <li>
              <span className="left-content">4M</span>
              <span className="price">Unlimited</span>
            </li>
            <li>
              <span className="left-content">8M </span>
              <span className="price"> Unlimited</span>
            </li>
            <li>
              <span className="left-content">Terra Home</span>
              <span className="price">Unlimited</span>
            </li>
            <li>
              <span className="left-content">Terra Smart</span>
              <span className="price">Unlimited</span>
            </li>
          </ul>
        </div>
        <div className="cardid">
          <h2>Plan 3</h2>
          <ul>
            <li>
              <span className="left-content">Terra Play</span>
              <span className="price">Unlimited</span>
            </li>
            <li>
              <span className="left-content">50M</span>
              <span className="price">Unlimited</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">240GB</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">400GB</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">500GB</span>
            </li>
            <li>
              <span className="left-content">Open Speed</span>
              <span className="price">1000GB</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-infos">
        <p>For inquiries, contact us at:</p>
        <a
          href="https://wa.me/+9613602789"
          target="_blank"
          rel="noreferrer"
          className="contact-number"
        >
          <FontAwesomeIcon icon={faPhone} /> +961 3 602 789
        </a>
      </div>
    </>
  );
}

export default InternetDsl;

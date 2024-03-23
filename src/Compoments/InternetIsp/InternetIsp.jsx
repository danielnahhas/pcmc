import React from "react";
import "./InternetIsp.css";

function InternetIsp() {
  return (
    <div className="int-body">
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
      </div>
    </div>
  );
}

export default InternetIsp;

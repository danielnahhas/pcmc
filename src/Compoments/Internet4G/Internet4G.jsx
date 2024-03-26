import React from "react";
import "./Internet4G";

function Internet4G() {
  return (
    <div>
        <div>
        <h1>4G Internet</h1>
      <p>
        {" "}
        Enjoy high-speed internet anywhere with our portable rechargeable
        router—no landline required. Stay connected on-the-go with ease. Explore
        now!
      </p>
        </div>
     
      <div className="cardi">
        <h2>Plan</h2>
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
  );
}

export default Internet4G;

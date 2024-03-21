import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webdev from "./web.svg";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="body">
      <div className="slider-container">
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="content">
              <img className="web" src={webdev} alt="Web Development" />
              <h2>Web Development</h2>
              <p>
                Creating and managing websites and web applications, covering
                both frontend and backend development.
              </p>
            </div>
            <div className="content">
              <img className="web" src="/Assets/fiber.jpg" alt="Slide 2" />
              <h2>Fiber Optics</h2>
              <p>
                Connection that can reach speeds of up to 940 Megabits per
                second
              </p>
            </div>
            <div className="content">
              <img className="web" src="/Assets/internet.jpg" alt="Slide 2" />
              <h2>Internet Service Provider</h2>
              <p>Offering reliable internet connectivity for your needs.</p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="body-head">
        <h2>Services We Provide</h2>
        <p>Choose from below the service that best fits your needs</p>
      </div>
      
      <div class="card">
        <div class="card-overlay"></div>
        <div class="card-inner">
          <h4>Web Development</h4>
          <Link className="plans" to={"/web-development"}>
            <button>
              <span>VIEW PLANS</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  stroke-width="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div class="card-inner">
        <h4>Internet (ISP)</h4>
          <Link className="plans" to={"/internet-isp"}>
            <button>
              <span>VIEW PLANS</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  stroke-width="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div class="card-inner">
        <h4>Internet (DSL)</h4>
          <Link className="plans" to={"/internet-dsl"}>
            <button>
              <span>VIEW PLANS</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  stroke-width="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

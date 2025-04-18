import React from 'react';
import './CardComponent.css'; // Import your CSS styles

const CardComponent = () => {
  return (
    <div className="card-container">
      {/* Centered Heading Image from public folder */}
      <img src="/stats.jpeg" alt="Project Heading" className="heading-image" />

      <div className="card-row">
        {/* Card 1 */}
        <div className="card-client small">
          <div className="card-content">
            <div className="icon">🏢</div>
            <p className="name-client">Green AI Buildings</p>
            <p className="description">
              Rate buildings for sustainability energy, material, and waste metrics.
            </p>
          </div>
          <a href="https://huggingface.co/spaces/aasthaaaaa123/Greenai" className="card-button">Explore</a>
        </div>

        {/* Card 2 */}
        <div className="card-client medium">
          <div className="icon">🗑️</div>
          <p className="name-client">Garbage Predictor</p>
          <p className="description">
            Estimate garbage generation using machine learning and adjust local collection systems accordingly.
          </p>
          <a href="https://huggingface.co/spaces/Devanshiiiiii/garbageai" className="card-button">Try Tool</a>
        </div>

        {/* Card 3 */}
        <div className="card-client large">
          <div className="icon">🌦️</div>
          <p className="name-client">Weather & AQI</p>
          <p className="description">
            Get real-time weather and air quality data from APIs like OpenWeather and IQAir to help plan smarter.
          </p>
          <a href="https://huggingface.co/spaces/aasthaaaaa123/weatherforecasting123" className="card-button">Check Now</a>
        </div>

        {/* Card 4 */}
        <div className="card-client medium">
          <div className="icon">🌍</div>
          <p className="name-client">Carbon Emission</p>
          <p className="description">
            Predict carbon emissions in your locality using advanced models and environmental datasets.
          </p>
          <a href="https://huggingface.co/spaces/Devanshiiiiii/carbonemission" className="card-button">Calculate</a>
        </div>

        {/* Card 5 */}
        <div className="card-client small">
          <div className="icon">🔌</div>
          <p className="name-client">EV Mapping</p>
          <p className="description">
            Locate EV charging stations and access public transport info powered by smart mapping APIs.
          </p>
          <a href="https://huggingface.co/spaces/aasthaaaaa123/electricvehicle" className="card-button">Locate</a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

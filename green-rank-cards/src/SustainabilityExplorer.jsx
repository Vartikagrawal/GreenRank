
import React from 'react';
import './SustainabilityExplorer.css';

const SustainabilityExplorer = () => {
  return (
    <div className="main-wrapper">
      {/* 👇 Replaced text heading with your image */}
      <div className="heading-img">
        <img src="/blogs.jpeg" alt="Blogs Heading" />
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-container" id="carousel">

          {/* Card 1 */}
          <div className="card">
            <img 
              src="https://th.bing.com/th/id/OIP.xg3cYJpIKuIZg4vLl4XnKAAAAA?rs=1&pid=ImgDetMain" 
              alt="NDVI Green Cover" 
            />
            <div className="card-content">
              <h2>Green Cover with NDVI</h2>
              <p>Analyze green zones and vegetation health through NDVI satellite data.</p>
              <a href="https://greenenergyhub.com/green-energy-blogs/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="read-more">
                Read More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg" 
              alt="EV Charging Station" 
            />
            <div className="card-content">
              <h2>EV Charging</h2>
              <p>Find locations of electric vehicle charging stations across cities.</p>
              <a href="https://www.ampcontrol.io/blog" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="read-more">
                Read More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/14567781/pexels-photo-14567781.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Air Quality Index" 
            />
            <div className="card-content">
              <h2>Air Quality Index (AQI)</h2>
              <p>Track real-time pollution levels for healthier urban living.</p>
              <a href="https://bloggers.feedspot.com/air_quality_blogs/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="read-more">
                Read More
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img 
              src="https://media.istockphoto.com/id/2176216830/photo/concord-california-elevated-skyline-view-with-bart-train.webp?a=1&b=1&s=612x612&w=0&k=20&c=rc7zAjQAjSxZ2BTULIZtUxrGGIaF4AiwKFVkxq0HR30=" 
              alt="Public Transit" 
            />
            <div className="card-content">
              <h2>Public Transit Access</h2>
              <p>Explore the availability of green transportation options in cities.</p>
              <a href="https://bloggers.feedspot.com/mass_transit_blogs/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="read-more">
                Read More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SustainabilityExplorer;

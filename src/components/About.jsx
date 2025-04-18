// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          GreenRank is an AI-powered sustainability platform built by a passionate team aiming to make eco-friendly living easier and smarter. We help users understand their environmental impact through features like carbon footprint analysis, garbage zone detection, EV charging station maps, green space discovery, and a carbon emission radar. Our mission is to drive real-world change by making sustainability practical, data-driven, and accessible. What sets GreenRank apart is its all-in-one, location-based approach that turns awareness into meaningful action.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  container: {
    backgroundColor: '#0d0d0d',
    borderRadius: '25px',
    border: '2px solid #1de9b6',
    boxShadow: '0 0 25px #1de9b6',
    padding: '40px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  paragraph: {
    color: '#ccc',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
};

export default About;

import React, { useState } from 'react';
import './App.css';  // Make sure to import your CSS file
import image from '../src/image.jpg'; // Path to the uploaded image

function App() {
  // Manage the visibility of sections using useState
  const [activeSection, setActiveSection] = useState('about'); // Default section

  // Function to change the active section  
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <header>
        <div className="buttons">
          <h1>My LinkedIn Profile</h1>
        </div>
      </header>

      <div className="button-container">
        <button className="btn" onClick={() => handleButtonClick('about')}>About</button>
        <button className="btn" onClick={() => handleButtonClick('contact')}>Contact Me</button>
        <button className="btn" onClick={() => handleButtonClick('projects')}>Projects</button>
        <button className="btn" onClick={() => handleButtonClick('certifications')}>Certifications</button>
      </div>
<br/>
<br/>
      {/* Show respective sections based on activeSection */}
      {activeSection === 'about' && (
        <div className="about-section">
          <h2>About Me</h2>
          <p>
            I am Lakshmi, a final-year B.Tech student at Ramachandra College of Engineering, 
            with a growing passion for web development. I have acquired skills in Java, HTML, CSS, 
            and JavaScript, and I am eager to apply my knowledge in practical settings. 
            My goal is to create innovative and user-friendly web applications that enhance online experiences. 
            I am looking for opportunities to learn and contribute in a dynamic environment as I embark on my career in web development.
          </p>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="contact-section">
          <h2>Contact Me</h2>
          <p>Email   : lakshmivijjolu@gmail.com</p>
          <p>GitHub  : <a href="https://github.com/vijjolulakshmi" target="_blank" rel="noopener noreferrer">vijjolulakshmi</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/lakshmivijjolu/" target="_blank" rel="noopener noreferrer">vijjolulakshmi</a></p>
        </div>
      )}

      {activeSection === 'projects' && (
        <div className="projects-section">
          <h2>Projects</h2>
          <p><strong>Smart Glasses for Blind People</strong><br />
          We have designed a smart glass for visually impaired people that can recognize objects 
          and measure the distance between a blind person and the object using an ultrasonic sensor.
          </p>
        </div>
      )}

      {activeSection === 'certifications' && (
        <div className="certifications-section">
          <h2>Certifications</h2>
          <p>
            C Programming, AWS For Beginners, Java for Beginners Certification, 
            JavaScript Certification, and participated in an Embedded Workshop in our college, receiving a certification.
          </p>
        </div>
      )}

      {/* Image aligned to the top-right corner */}
      <div>
        <img src={image} alt="Profile" />
      </div>
    </div>
  );
}

export default App;

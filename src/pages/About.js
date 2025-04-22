// src/pages/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me </h1>
      <p className="bio">
        Hi! I'm Brianna Jesionowski — a 4th year Digital Media student at the University of Central Florida. I have always had a passion for content, social media and the internet which has led me to learning web design, graphic design and content creation. I have 1 year left of my studies here at UCF and my goal is to become a creative freelancer in which I will be able to manage my photogrpahy, social media mangements, graphic design, web design and content creation.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h2>💻 Skills</h2>
          <ul>
            <li>Video Editing</li>
            <li>Photo Editing</li>
            <li>Figma/ Canva</li>
            <li>Adobe</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>📸 Interests</h2>
          <ul>
            <li>Photograohy</li>
            <li>Content Creation</li>
            <li>Dog Training</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

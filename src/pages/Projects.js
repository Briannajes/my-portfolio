
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'React Exercise App',
      description: 'A basic outline of an exercise app in which repition and duration exercises are present. Allows users to count intervals and start a timer.',
      image: '/images/weather-app.png',
      link: 'https://github.com/Briannajes/School.git'
    },
    {
      title: 'React Menu App',
      description: 'A basic startup of a resturant menu included buttons to add item to cart, the price and description of the items.',
      image: '/images/journal-app.png',
      link: 'https://github.com/Briannajes/menu-app/tree/6c8597e379bb266b7f5abf8f6e7702cba748887c/menu-app'
    },
    {
      title: 'Expo ToDo List',
      description: 'An interface that allows users to add tasks and mark off ones that are complete.',
      image: '/images/plantpal-app.png',
      link: 'https://github.com/Briannajes/Todo'
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects </h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


import React from 'react';
import '../styles/Home.css';
import flowersImg from '../assets/flowers.jpg';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${flowersImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="home-container" style={backgroundStyle}>
      <header className="home-header">
        <div className="home-header-box">
          <h1>Welcome to my little portfolio</h1>
          <p>A small glimpse into who I am and the work I have done for this class</p>
        </div>
      </header>
      <main className="home-main">
      <div className="home-box">
        <p className="home-description">
          Here you'll find my favorite projects from this class, my socials and contact and some information about me!
        </p>
        </div>
      </main>
    </div>
  );
}

export default Home;

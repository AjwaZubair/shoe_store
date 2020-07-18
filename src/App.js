import React from 'react';
import './App.css';
import Routes from './Route.js';
import styles from './App.css';
import shoePic from './images/shoe.jpg';

function App() {
  return (
    <div >
      <Routes />
      <img  className={styles.image} src={shoePic} alt="SHOES"/>
    </div>
  );
}

export default App;
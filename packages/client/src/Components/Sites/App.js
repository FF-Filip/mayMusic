import React, {useEffect, useState} from 'react';
import '../CSS/App.css';
import navBarStyle from '../CSS/NavBar.css';

function App()
  {
    

    return (
      <div className="navBar">
        <h2 className="title">mayMusic</h2>
        <ul>
          <li><a href=''>Strona Główna</a></li>
          <li><a href=''>Radio</a></li>
          <li><a href=''>Mój Profil</a></li>
          <li><a href=''>Pliki</a></li>
        </ul>
      </div>
    );
  }

  export default App;
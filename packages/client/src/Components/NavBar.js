import React, {useEffect, useState} from 'react';
import './CSS/App.css'; 
import './CSS/NavBar.css';

function NavBar()
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
        <div className='user_options'>
          <a>Zaloguj się</a>
          <a>Zarejestruj się</a>
        </div>
      </div>
    );
  }

  export default NavBar;
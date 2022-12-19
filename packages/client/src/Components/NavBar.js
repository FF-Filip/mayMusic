import React, {useEffect, useState} from 'react';
// import './CSS/App.css'; 
// import './CSS/NavBar.css';
// import { Link } from 'react-router-dom';

function NavBar()
  {
    return (
      <div className="navBar">
        <h2 className="title">mayMusic</h2>
        <ul>
          {/* <li><Link to='/Glowna'>Strona Główna</Link></li>
          <li><Link to='/Profil'>Mój Profil</Link></li> */}
          <li><a href='/Glowna'>Strona Główna</a></li>
          <li><a href='/Profil'>Mój Profil</a></li>
        </ul>
        <div className='user_options'>
          <a>Zaloguj się</a>
          <a>Zarejestruj się</a>
        </div>
      </div>
    );
  }

  export default NavBar;
import React, {useEffect, useState} from 'react';
import './Components/CSS/App.css';
import Glowna from './Sites/Glowna';
import NavBar from './Components/NavBar';
import Profil from './Sites/Profil';
import NoPage from './Sites/NoPage';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App(){

  return(
    <>
      {/* <NavBar />
          <Routes>
            <Route index element={<Glowna />} />
            <Route path="profil" element={<Profil />} />
            <Route path="*" element={<NoPage />} />
          </Routes> */}
    </>
      
  );
}

  export default App;
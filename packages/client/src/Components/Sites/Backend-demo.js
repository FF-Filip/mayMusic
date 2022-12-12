import React, {useEffect, useState} from 'react';
import '../CSS/App.css';

function Backend()
  {
    const [backendData, setBackendData] = useState();

    useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

    return (
      <div>
        {(typeof backendData === 'undefined') ? (
          <p>Ładowanie...</p>
        ) : (
          backendData.users.map((user, i ) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
    )
  }

  export default Backend;
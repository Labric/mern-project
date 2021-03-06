import React, { useContext } from 'react'
import Log from '../components/log'
import { UidContext } from '../components/AppContext'
import UpdateProfil from '../components/Profil/UpdateProfil';
import ShowProfil from '../components/Profil/ShowProfil';
import Trends from '../components/Trends';

const Profil = () => {
  const uid = useContext(UidContext)

  return (
    <div className="profil-page">
      {uid ? <UpdateProfil /> : (   
          <div className="log-container">
            <Log signin={false} signup={true} />
            <div className="img-container">
              <img src="./img/log.svg" alt="" />
            </div>
          </div>
        )}
        <ShowProfil />
        <div className="wrapper">
        <Trends/></div>
    </div>

  );
};

export default Profil;
// useState, render states dynamic
import React, {useEffect, useState} from 'react';
import HorizontalNav from "./components/HorizontalNav/HorizontalNav.js";
import VerticalNav from "./components/VerticalNav/VerticalNav.js";
import Main from "./components/Main/Main.js";
import axios from "axios";
import mainDatas from "./data/maindata.json";
import activityDatas from "./data/useractivities.json";
import performanceDatas from "./data/performances.json";
import sessionDatas from "./data/averagesessions.json";
// Import PropTypes => transform props in differents types
import PropTypes from "prop-types";
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState(false);
  const [userActivity, setUserActivity] = useState(false);
  const [userSesions, setUserSessions] = useState(false);
  const [userPerformance, setUserPerformance] = useState(false);
  const USER_ID = 18;

  return (
    <div className="App">
      <HorizontalNav />
      <div className="main-vertical-parent">
        <VerticalNav />
        <Main
        // Differents props contains recents data by id user
          activityDataProp={userActivity}
          userInfoProp={userInfo}
          sessionsProp={userSesions}
          performanceProp={userPerformance}
          todayScoreProp={userInfo}
          cardsProp={userInfo.keyData}
        />
      </div>
    </div>
  );
}

export default App;

// For recharts.js, props to be an object
App.propTypes = {
  activityDataProp: PropTypes.object,
  userInfoProp: PropTypes.object,
  sessionsProp: PropTypes.object,
  performanceProp: PropTypes.object,
  todayScoreProp: PropTypes.object,
  cardsProp: PropTypes.object,
};


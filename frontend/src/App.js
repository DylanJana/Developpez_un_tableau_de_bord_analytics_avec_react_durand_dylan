// useState, render states dynamic
import React, {useEffect, useState} from 'react';
import HorizontalNav from "./components/HorizontalNav/HorizontalNav.js";
import VerticalNav from "./components/VerticalNav/VerticalNav.js";
import Main from "./components/Main/Main.js";
import axios from "axios";
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
// import mainDatas from "./data/maindata.json";
// import activityDatas from "./data/useractivities.json";
// import performanceDatas from "./data/performances.json";
// import sessionDatas from "./data/averagesessions.json";
// Import PropTypes => transform props in differents types
import PropTypes from "prop-types";
import './App.css';

// function App() {
//   const [userInfo, setUserInfo] = useState(false);
//   const [userActivity, setUserActivity] = useState(false);
//   const [userSesions, setUserSessions] = useState(false);
//   const [userPerformance, setUserPerformance] = useState(false);
//   const USER_ID = 18;

//   return (
//     <div className="App">
//       <HorizontalNav />
//       <div className="main-vertical-parent">
//         <VerticalNav />
//         <Main
//         // Differents props contains recents data by id user
//           activityDataProp={userActivity}
//           userInfoProp={userInfo}
//           sessionsProp={userSesions}
//           performanceProp={userPerformance}
//           todayScoreProp={userInfo}
//           cardsProp={userInfo.keyData}
//         />
//       </div>
//     </div>
//   );
// }

function App() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 400, pv: 2400, amt: 3000},
  {name: 'Page C', uv: 400, pv: 2400, amt: 1000},
  {name: 'Page D', uv: 400, pv: 2400, amt: 5000}
  ];
  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        <CartesianGrid stroke="purple" strokeDasharray="1 20" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip dataKey="uv"/>
      </LineChart>
    </div>
  )
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


import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Graphs from '../Graphs/Graphs';
import PropTypes from 'prop-types'
import './main.css';



function Main(props) {
  // incomingUserInfoPropu = Proriété des info utilisateur entrante
  const incomingUserInfoPropu = props.userInfoProp;
  const incomingUserActivityPropu = props.activityDataProp;
  const incomingUserSessionsPropu = props.sessionsProp;
  const incomingUserPerformancePropu = props.performanceProp;
  const incomingUserScorePropu = props.todayScoreProp;
  const incomingUserCardsPropu = props.cardsProp;

  // States to change message, if user setUserScore
  const [userScore, setUserScore] = useState(false);
  const [userMessage, setUserMessage] = useState(false);

  return (
    <div className='main-parent'>
      {/* <header className='main-header'>Bonjour <span className='user-name'>
        {
          incomingUserInfoPropu ? incomingUserInfoPropu.userInfos.firstName : null
        }
      </span></header>
      <div className='objective-result'>
        {
          userMessage ? userMessage : null
        }
      </div>
      <div className='graphs-cards-row'>
        <Graphs activity={incomingUserActivityPropu} sessions={incomingUserSessionsPropu} performance={incomingUserPerformancePropu} score={incomingUserScorePropu} />
        <Cards cards={incomingUserCardsPropu} />
      </div> */}
    </div>
  )
}

export default Main;

Main.propTypes = {
  activity:PropTypes.object,
  sessions:PropTypes.object,
  performance:PropTypes.object,
  score:PropTypes.object,
  cards:PropTypes.object
}


import React from 'react'
import IndividualLeague from './IndividualLeague'
import { useState, useEffect } from 'react'
import LeagueForm from './LeagueForm';

function LeagueContainer() {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:9393/leagues')
          .then(r => r.json())
          .then((json) => setLeagues(json))
        }, []);

        function addLeague(league) {
            setLeagues([...leagues, league]);
          }

    const showLeagues = leagues.map((league) => (
        <IndividualLeague
          key = {league.id}
          league = {league}
        />
      ));

    return (
        <div>
            <LeagueForm onAddleague = {addLeague}/>
            <h3>Current Leagues</h3>
            {showLeagues}
        </div>
    )
}

export default LeagueContainer;
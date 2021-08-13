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
            <h2>Leagues Container</h2>
            <LeagueForm 
            league = {addLeague}
            />
            {showLeagues}
        </div>
    )
}

export default LeagueContainer;
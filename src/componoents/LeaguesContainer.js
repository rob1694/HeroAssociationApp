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
          deleteLeague = {deleteLeague}
        />
      ));

      function deleteLeague(leagueId) {
        const newURL = `${'http://127.0.0.1:9393/leagues'}/${leagueId}`;
        const config = { method: "DELETE" };
        fetch(newURL, config)
          .then(r => r.json())
          .then(() => {
            const deleteLeagues = leagues.filter(league => league.id !== leagueId);
           setLeagues(deleteLeagues)
          })
      }

      // debug deleting heroes along with league when league deleted
      // or create un unspecified League section of Heros

    return (
        <div>
            <LeagueForm onAddleague = {addLeague}/>
            <h3>Current Leagues</h3>
            {showLeagues}
        </div>
    )
}

export default LeagueContainer;
import React from 'react'
import HeroForm from './HeroForm';
import HeroCard from './HeroCard';
import { useState, useEffect } from 'react'

function IndividualLeagues( {league, deleteLeague} ) {

  const [heroes, setHeroes] = useState([]);
  const {id, name, description, img_url} = league

  useEffect(() => {
    fetch('http://127.0.0.1:9393/heros')
      .then(r => r.json())
      .then((json) => setHeroes(json))
    }, []);

    function deleteHero(heroId) {
      const newURL = `${'http://127.0.0.1:9393/heros'}/${heroId}`;
      const config = { method: "DELETE" };
      fetch(newURL, config)
        .then(r => r.json())
        .then(() => {
          const deleteHeroes = heroes.filter(hero => hero.id !== heroId);
         setHeroes(deleteHeroes)
        })
    }

    function addHero(hero) {
      setHeroes([...heroes, hero]);
      }

      function handleDeleteLeague () {
        deleteLeague(id)
      }

  const showHeroes = heroes.map(hero => {
    if (hero.league_id === id) {
      return (
    <HeroCard
    key = {hero.id}
    hero = {hero}
    deleteHero = {deleteHero}
    />
        )
      }
    }
  )
   


  return (
    <div>
      <img alt = {name} src = {img_url} />
      <h3>{name}</h3>
      <p>{description}</p>
      <img alt = {name} src = {img_url} />
      <button onClick = {handleDeleteLeague}>DELETE League</button>
      
      <HeroForm onAddHero = {addHero} leagueId = {id}/>
      {showHeroes}
   </div>
  );
}

export default IndividualLeagues;

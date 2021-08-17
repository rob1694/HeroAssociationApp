import React from 'react'
import './IndividualLeague.css'
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
    <div class="card p-4 m-4 text-white bg-dark">
      <div class = "">
        <img class = "d-flex-justify-content-start" alt = {name} src = {img_url} />
        <img class = "d-flex-justify-content-end" alt = {name} src = {img_url} />
      </div>
      <div class = "d-flex justify-content-end">
      </div>
      <div class = "d-flex justify-content-center">
        <h2>{name}</h2>
      </div>
      <div class = "d-flex justify-content-center">
        <p>{description}</p>
      </div>
      <div>
        <button className = "btn btn-danger" onClick = {handleDeleteLeague}>DELETE League</button>
      </div>
      <HeroForm onAddHero = {addHero} leagueId = {id}/>
      {showHeroes}
   </div>
  );
}

export default IndividualLeagues;

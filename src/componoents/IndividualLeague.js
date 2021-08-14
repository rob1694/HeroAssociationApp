import React from 'react'
import HeroForm from './HeroForm';
import HeroCard from './HeroCard';
import { useState, useEffect } from 'react'

function IndividualLeagues( {league} ) {

  const [heroes, setHeroes] = useState([]);
  const {id, name, description, img_url} = league

  useEffect(() => {
    fetch('http://127.0.0.1:9393/heros')
      .then(r => r.json())
      .then((json) => setHeroes(json))
    }, []);

    // function addHero(hero) {
    //   setHeroes([...heroes, hero]);
    //   }3


  const showHeroes = heroes.map(hero => {
    if (hero.league_id === id) {
      return (
    <HeroCard
    key = {hero.id}
    hero = {hero}
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
      
      <HeroForm/>
      {showHeroes}
   </div>
  );
}

export default IndividualLeagues;

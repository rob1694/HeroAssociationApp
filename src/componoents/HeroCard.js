import React from 'react'

function HeroCard( {hero, deleteHero} ) {

function handleDeleteHero() {
  deleteHero(hero.id)
}

    const {name, description, rank, abilities, img_url} = hero
    return (
      <div>
        <h4>Name: {name}</h4>
        <p>Description: {description}</p>
        <p>Abilities: {abilities}</p>
        <p>Rank: {rank}</p>
        <img alt = {name} src = {img_url}/>
        <div>
          <button onClick = {handleDeleteHero}>DELETE Hero</button>
        </div>
     </div>
    );
  }
  
  export default HeroCard;
  
import React from 'react'

function HeroCard( {hero} ) {

    const {name, description, rank, abilities, img_url} = hero
    return (
      <div>
        <h4>Name: {name}</h4>
        <p>Description: {description}</p>
        <p>Abilities: {abilities}</p>
        <p>Rank: {rank}</p>
        <img alt = {name} src = {img_url}/>
     </div>
    );
  }
  
  export default HeroCard;
  
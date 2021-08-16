import React from 'react'

function HeroCard( {hero, deleteHero} ) {

function handleDeleteHero() {
  deleteHero(hero.id)
}

    const {name, description, rank, abilities, img_url} = hero
    return (
      <div  >
        <img class="character" alt = {name} src = {img_url}/>
        <div class="card-body">
          <h4 className = "card-header">Name: {name}</h4>
          <p class="card-text" >Description: {description}</p>
          <p class="card-text" >Abilities: {abilities}</p>
          <p class="card-text" >Rank: {rank}</p>
        </div>
        <div>
          <button className = "btn btn-danger" onClick = {handleDeleteHero}>DELETE Hero</button>
        </div>
     </div>
    );
  }
  
  export default HeroCard;
  
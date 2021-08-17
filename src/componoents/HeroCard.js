import React from 'react'

function HeroCard( {hero, deleteHero} ) {

function handleDeleteHero() {
  deleteHero(hero.id)
}

    const {name, description, rank, abilities, img_url} = hero
    return (
      
      <div class = "row">
        <div class="d-flex justify-content-center p-2 bd-highlight">
          <div class = "card col-sm-3 text-dark" >
            <img class="card-img-top" alt = {name} src = {img_url}/>
            <div class="card-body">
              <h4 className = "card-header">{name}</h4>
              <p class="card-text" >{description}</p>
              <p class="card-text" >Abilities: {abilities}</p>
              <p class="card-text" >Rank: {rank}</p>
            </div>
            <div>
              <button className = "btn btn-danger" onClick = {handleDeleteHero}>DELETE Hero</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroCard;
  
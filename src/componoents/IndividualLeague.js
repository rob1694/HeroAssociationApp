import React from 'react'
import HeroForm from './HeroForm';
import HeroCard from './HeroCard';

function IndividualLeagues( {league} ) {

  const {name, description, img_url} = league

  return (
    <div>
      <img alt = {name} src = {img_url} />
      <h3>{name}</h3>
      <p>{description}</p>
      <img alt = {name} src = {img_url} />
      
      <HeroForm/>
      <HeroCard/>
   </div>
  );
}

export default IndividualLeagues;

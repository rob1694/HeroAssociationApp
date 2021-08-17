import React from 'react'
import {useState} from 'react'

function HeroForm( {onAddHero, leagueId} ) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        abilities: "",
        rank: "",
        img: ""
    })

    function handleChange(e) {
        const value = e.target.value
            const name = [e.target.name]
            setFormData({
              ...formData,
              [name]: value
            });
    }
    
    function clearForm() {
        setFormData({
          title: "",
          description: "",
          abilities: "",
          rank: "",
          img: ""
        })
      }

      function handleSubmit(e) {
        // e.preventDefault();
    
        const newHero = {
            name: formData.name,
            description: formData.description,
            abilities: formData.abilities,
            rank: formData.rank,
            img: formData.img_url,
            league_id: leagueId
          }; 
    
          fetch( 'http://127.0.0.1:9393/heros', { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newHero),
          })
            .then((r) => r.json())
            .then(onAddHero)
            .then(clearForm)
        }

    return (
      <div class = "bg-light text-dark">
        <h4>Hero Sign Up Form</h4>
        <form onSubmit = {handleSubmit}>
            <input name = "name" placeholder = "Name"  value = {formData.name} onChange = {handleChange}></input>
            <input name = "description" placeholder = "Description"  value = {formData.description} onChange = {handleChange}></input>
            <input name = "abilities" placeholder = "Abilities"  value = {formData.abilities} onChange = {handleChange}></input>
            <input name = "rank" placeholder = "Rank"  value = {formData.rank} onChange = {handleChange}></input>
            <input name = "img" placeholder = "Img Url"  value = {formData.img} onChange = {handleChange}></input>
            <button className = "btn btn-primary"> Sign Up </button>
        </form>
     </div>
    );
  }
  
  export default HeroForm;
  
import React from 'react'
import {useState} from 'react' 


function UpdatedHeroForm ( {heroes, setHeroes} ) {

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

    const updatedHero = {
        name: formData.name,
        description: formData.description,
        abilities: formData.abilities,
        rank: formData.rank,
        img: formData.img_url,
      }; 

      patchHero(heroes.id, updatedHero)
      
    }

    function patchHero(heroId, updatedHero) {
        fetch(`${'http://127.0.0.1:9393/heros'}/${heroId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedHero),
        })
          .then((r) => r.json())
          .then((updatedHero) => {
            const updatedHeroes = heroes.map((hero) => {
            if (hero.id === updatedHero.id) return updatedHero;
              return hero;
            });
            setHeroes(updatedHeroes);
          })
          .then(clearForm)
      }

    return (
        <div>
        <h4>Update Hero</h4>
        <form onSubmit = {handleSubmit}>
            <input name = "name" placeholder = "Updated Name"  value = {formData.name} onChange = {handleChange}></input>
            <input name = "description" placeholder = "Updated Description"  value = {formData.description} onChange = {handleChange}></input>
            <input name = "abilities" placeholder = "Updated Abilities"  value = {formData.abilities} onChange = {handleChange}></input>
            <input name = "rank" placeholder = "Updated Rank"  value = {formData.rank} onChange = {handleChange}></input>
            <input name = "img" placeholder = "Updated Img Url"  value = {formData.img} onChange = {handleChange}></input>
            <button> Update </button>
        </form>
     </div>
    )

}

    export default UpdatedHeroForm;
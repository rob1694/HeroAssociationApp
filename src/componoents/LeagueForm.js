import React from 'react'
import { useState } from 'react'

function LeagueForm( {onAddleague} ) {

const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: ""
});

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
      img: ""
    })
  }

  function handleSubmit(e) {
    // e.preventDefault();

    const newLeague = {
        name: formData.name,
        description: formData.description,
        img: formData.img_url
      }; 

      fetch( 'http://127.0.0.1:9393/leagues', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLeague),
      })
        .then((r) => r.json())
        .then(onAddleague)
        .then(clearForm)
    }
    

  return (
      <div className = "container">
          <h3>Register League</h3>  
            <form onSubmit = {handleSubmit}>
               <input name = "name" placeholder = "Name" value = {formData.name} onChange = {handleChange}/>
               <input name = "description" placeholder = "Description" value = {formData.description} onChange = {handleChange}/>
               <input name = "img" placeholder = "Img Url" value = {formData.img} onChange = {handleChange}/>
               <button className = "btn btn-primary"> Submit </button>
            </form>
      </div>
  )
}

export default LeagueForm;
import React from 'react'

const MenuBar = (props) => {

  
  const calcClassName = id => {
    return id === props.selectedTagId ? "item active" : "item"
  }
  return (
    
    
    <div className="ui four item menu">
      <a className={calcClassName("profile")} id="profile" onClick={e => props.tagClick(e.target.id)}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={calcClassName("photo")} id="photo" onClick={e => props.tagClick(e.target.id)}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={calcClassName("cocktail")} id="cocktail" onClick={e => props.tagClick(e.target.id)}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={calcClassName("pokemon")} id="pokemon" onClick={e => props.tagClick(e.target.id)}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

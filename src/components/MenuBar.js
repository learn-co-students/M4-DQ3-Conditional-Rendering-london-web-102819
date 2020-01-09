import React from 'react'



const MenuBar = (props) => {
  let { handleCategoryChange, state} = props; 
  console.log(state); 
  /*
  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */
  const handleClick = event => {
    event.preventDefault(); 
    handleCategoryChange(event.target.id);
    // console.log(event.target.className)
    // if (event.target.className.includes('item')){
    //   event.target.className === 'item' ? event.target.className = 'item active' : event.target.className = 'item active';
    // }
  }; 

  return (
    <div className="ui four item menu">
      <a className={'item ' + (state.selectedCategory === 'profile' ? 'active' : null)} id="profile" onClickCapture={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={'item ' + (state.selectedCategory === 'photo' ? 'active' : null)} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={'item ' + (state.selectedCategory === 'cocktail' ? 'active' : null)} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={'item ' + (state.selectedCategory === 'pokemon' ? 'active' : null)} id="pokemon" onClick={handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

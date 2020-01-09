import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    categoryFilter: "Profile"
  }
  
  changeSelectedCategory = categoryFilter => {
    this.setState({
      categoryFilter
    });
  };



  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   
    
    const detailsToDisplay = 
    <div>
      {this.state.categoryFilter === "Profile" &&
      <Profile/>
      }
      {this.state.categoryFilter === "Photo" &&
      <Photos/>
      }
      {this.state.categoryFilter === "Cocktail" &&
      <Cocktails/>
      }
      {this.state.categoryFilter === "Pokemon" &&
      <Pokemon/>
      }

    </div>

    return (
      <div>
        <MenuBar onSelectedCategory={this.changeSelectedCategory} currentSelection={this.state.categoryFilter}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox

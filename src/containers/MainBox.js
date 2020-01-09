import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  

   state = {
     selectedCard: Profile()
   }


   changeCard = card => {

    const keys = {
      "profile": Profile(),
      "photo": Photos(),
      "pokemon": <Pokemon />,
      "cocktail": Cocktails()
    }
     this.setState({
        selectedCard: keys[card]
     })
   }

  detailsToDisplay = () => <div>{this.state.selectedCard}</div>;
  render() {

    return (
      <div>
        <MenuBar changeCard = {this.changeCard}/>
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox

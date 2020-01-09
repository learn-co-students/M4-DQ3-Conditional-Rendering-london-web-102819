import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";
import { cocktails } from "../data.js";

class MainBox extends React.Component {
  state = {
    selectedCard: Profile()
  };

  changeCard = card => {
    const keys = {
      profile: Profile(),
      photo: Photos(),
      cocktail: Cocktails(),
      pokemon: <Pokemon />
    };

    this.setState({
      selectedCard: keys[card]
    });
  };

  render() {
    const detailsToDisplay = <div>{this.state.selectedCard}</div>;

    return (
      <div>
        <MenuBar changeCard={this.changeCard} />
        {detailsToDisplay}
        {}
      </div>
    );
  }
}

export default MainBox;

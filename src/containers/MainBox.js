import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selectedTagId: "profile"
  }

  tagClick = id => {
    this.setState({selectedTagId: id})
  }

  whichDetails = () => {
    if (this.state.selectedTagId === "profile") return <Profile />;
    else if (this.state.selectedTagId === "photo") return <Photos />;
    else if (this.state.selectedTagId === "cocktail") return <Cocktails />;
    else return <Pokemon />;
  }

  render() {
    return (
      <div>
        <MenuBar selectedTagId={this.state.selectedTagId} tagClick={id => this.tagClick(id)}/>
        {this.whichDetails()}
      </div>
    )
  }

}

export default MainBox

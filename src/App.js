import React, { Component }  from "react";
import Header from "./components/Header";
import Characters from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import christmas from "./christmas.json";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    christmas,
    clickedCharacters: []
  };

  clickedImage = id => {
    let clickedCharacters = this.state.clickedCharacters;

    if (clickedCharacters.indexOf(id) === -1) {
      clickedCharacters.push(id);
      console.log(clickedCharacters);
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("You Win - Merry Christmas!")
      this.setState({
        clickedCharacters: []
      });
    } else {
      this.setState({
        clickedCharacters: []
      });
      console.log("duplicate")
      alert("A lump of coal for you - you clicked a character twice! Try again.")
    }
  }

  makeShuffle = () => {
    this.setState({ christmas: shuffle(christmas) })
  }

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          {this.state.christmas.map(christmas => (
            <Characters 
              key={christmas.id}
              id={christmas.id}
              name={christmas.name}
              image={christmas.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;


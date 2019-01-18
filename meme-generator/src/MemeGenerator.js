import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data =>
        this.setState({
          topText: data.data.memes[0].name
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Meme Generator Section</h1>
        <p>{this.state.topText}</p>
      </div>
    );
  }
}

export default MemeGenerator;

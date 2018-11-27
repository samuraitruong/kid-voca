import * as React from "react";
import "./App.css";

interface IAppState {
  word : string,
  words : string[];
  index : number;
}
class App extends React.Component < {},
IAppState > {
  constructor(props : any) {
    super(props);
    this.state = {
      index: -1,
      word: "Hello",
      words: []
    }
    this.randomWord = this
      .randomWord
      .bind(this);
  }
  public getRandomInteger(min : number, max : number, except : number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min;
    if (result === except) {
      return this.getRandomInteger(min, max, except);
    }
    return result;
  }

  public randomWord() {
    const length = this.state.words.length;
    const index = this.getRandomInteger(0, length - 1, this.state.index);
    const word = this.state.words[index];
    this.setState({word, index})

  }
  public componentDidMount() {
    const me = this;
    fetch('./words.json').then((response) => {
      return response.json();
    }).then((words : string[]) => {
      me.setState({words})
    });
  }
  public render() {
    return (
      <div className="app-container" onClick={this.randomWord}>
        <div className="word">
          {this.state.word}
        </div>
      </div>
    );
  }
}

export default App;

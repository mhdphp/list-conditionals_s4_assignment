import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import Description from './Assign_Description/Assign_Description';

class App extends Component {

  state = {textInput: ''};

  textInputHandler = (event) =>{
    this.setState({textInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    // get text from state.textInput and split it by chars
    const textInputSplit = this.state.textInput.split('');
    // delete item with index
    textInputSplit.splice(index, 1);
    // update the state.textInput with join
    const textUpdated = textInputSplit.join('');
    // update the state.textInput
    this.setState({textInput: textUpdated});
  }

  render() {
    // create component on the fly
    // initial value is when the input is empty
    let outputBlock = (
      <div id="output-items" style={{color:'red', fontWeight: '800'}}>
          <p>Input text too short!</p>
      </div>
    );
    // conditional
    if(this.state.textInput.length >= 5){
      outputBlock = (
        <div id="output-items">
          <Validation message='Text input long enough'/>
          <p>{this.state.textInput}</p>
        </div>
      );
    } 

    // split the inputText on characters
    const charList = this.state.textInput.split('').map((ch, index) =>{
      return (
        <Char 
        character = {ch}
        key = {index}
        clicked = {() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <Description/>
        <div id="input-items">
          <label htmlFor="text-length"><b>Text Input: </b></label>
          {/* call the textInputHandler method here */}
          <input 
            type="text" 
            id="text-input"
            value={this.state.textInput}
            onChange={this.textInputHandler}/>
        </div>
        {outputBlock}
        <div id="display-chars">
          {charList}
        </div>
      </div>
    );
  }
}

export default App;

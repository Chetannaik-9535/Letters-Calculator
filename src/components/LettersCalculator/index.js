// Write your code here.
import {Component} from 'react'
//import LettersCalculator from '../Components/LettersCalculator'

import './index.css'

class LettersCalculatorApp extends Component {
  state = {letters: ''}

  onWriteLetters = event => {
    this.setState({letters: event.target.value})
  }
  render() {
    const {letters} = this.state

    return (
      <div className="LettersCalculatorApp-container">
        <div className="Letters-card-container">
          <h1 className="Letters-container-heading">
            Calculate the Letters You Enter
          </h1>
          <label className="label" htmlFor="phraseInput">
            Enter the phrase
          </label>
          <input
            id="phraseInput"
            className="Letters-inputs"
            type="text"
            placeholder="Please Enter"
            value={letters}
            onChange={this.onWriteLetters}
          />
          <p className="calculate-numbers">No.of letters: {letters.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="container-img"
        />
      </div>
    )
  }
}

export default LettersCalculatorApp


/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/Letters-Calculator.git
*/
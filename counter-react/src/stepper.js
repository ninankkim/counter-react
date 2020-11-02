import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      show: false,
      transform: 0
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + Math.random() * 10 });
    this.setState({ transform: this.state.transform + 15})
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 76767 });
    this.setState({ transform: this.state.transform + 131})
  }
  ChangeNumber = (event) => { 
    if (parseInt(event.target.value) == null) {
      return 
    } else {
      this.setState({
        clicks: parseInt(event.target.value)
      })
    }}
  render() {
    return (
        <div class="form">
        <button class="increment" onClick={this.IncrementItem}>-</button>
        <form>
        <input style={{transform: `rotate(${this.state.transform}deg)`}} type="text" pattern="[0-9]*" value={this.state.clicks} onChange={this.ChangeNumber}>
          </input>
          </form>
        <button onClick={this.DecreaseItem}>+</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}
export default App;
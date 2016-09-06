import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			counter: 0
		};

	  	var _this = this;
	  	var counter = 0;

	  	setInterval(function() {
	  		_this.setState({
	  			"counter": counter++
	  		})
	  	}, 1000)
	}

  render() {
    return (
    <div>
      <h1>Hello, World.{this.state.counter}</h1>
      <h2>Preserving State, Everytime I update</h2>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

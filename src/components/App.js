// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
        	<div className="container-fluid">
        		App Starts here... I am fixed
        		{this.props.children}
        		<Link to="/about">About</Link>
        	</div>
        );
    }
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;

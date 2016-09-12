import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render((
		<Router history={browserHistory} routes={routes} />
	), document.getElementById('app')
)

// ReactDOM.render(<App />, document.getElementById('app'));

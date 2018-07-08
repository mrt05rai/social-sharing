import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./container/App"
import Home from "./container/Home"
import Store from './app-store/redux-configure';



const ProjectRouter = () => (
	<Provider store={Store}>
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					component={props => <App {...props} />}
				/>
				<Route
					exact
					path="/home"
					component={props => <Home {...props} />}
				/>
			</Switch>
		</Router>
	</Provider>	
)

export default ProjectRouter
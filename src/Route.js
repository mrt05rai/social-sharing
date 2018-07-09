import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Cookies from 'universal-cookie';
import App from "./container/App"
import Home from "./container/Home"
import Store from './app-store/redux-configure';
const history = createHistory()
const cookies = new Cookies();

const requireAuth = (nextState, replace) => {
  if (cookies.get('userToken')) {
    replace({
      pathname: '/'
    })
  }
}

const ProjectRouter = () => (
	<Provider store={Store} >
		<Router history={history}>
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
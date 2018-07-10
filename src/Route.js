import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Cookies from 'universal-cookie';
import App from "./container/App"
import Home from "./container/Home"
import Store from './app-store/redux-configure';
import * as MetaData from './utils/MetaData';
import Link from './component/LinkComponent'
const history = createHistory()
const cookies = new Cookies();

const ProjectRouter = () => (
	<Provider store={Store} >
		<Router history={history}>
			<Switch>
				<Route
					exact
					path="/"
					component={props => <App {...props} />}
				/>
				{cookies.get('userToken') ? <Route
					exact
					path="/home"
					component={props => <Home {...props} />}
				/> : <div><p>You are not authorized,please login</p><Link href="/" >{MetaData.LOG_IN}</Link></div>}
			</Switch>
		</Router>
	</Provider>	
)

export default ProjectRouter
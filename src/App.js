import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import './styles/util.css'
import './styles/style.css'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
class App extends React.Component {
  constructor () {
    super()
  }




  render () {
    return (
      <Router>
      <div>
          <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between nav-padding">
              <a className="py-2" href="#">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> */}
              </a>
              <a className="py-2 " href="#">Profile</a>
       
            </div>
          </nav>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />

          ))
          }
          <Redirect from="/" to="/home" />
        </Switch>































        











      </div>
      </Router>
    
    )
  }



}



export default App

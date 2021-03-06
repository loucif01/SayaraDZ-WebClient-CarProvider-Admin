import React, { Component } from 'react';
import './App.css';
import SignInUi from "./components/signIn/signInUI";
import Admin from './components/admin/admin';
import Fabricant from './components/fabricant/fabricant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PrivateRoute} from './utils/privateRoute'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="backGround">
            <Switch>
              {/* A user can't go to the HomePage if is not authenticated */}
              <Route path="/" component={SignInUi} exact />
              <PrivateRoute path="/admin" component={Admin} />
              <PrivateRoute path="/fabricant" component={Fabricant} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

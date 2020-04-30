import React,{Component} from 'react';
import {Link, Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Logout from './components/logout'
import Cust from './components/customer'
import Webcam from './components/webcam'
import App1 from './camera2';
import App3 from './camera3';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/customer" component={Cust}/>
        <Route exact path="/webcam" component={App3}/>
        <Route exact path="/logout" component={Logout}/>
      </Switch>
    );
  }
}
export default App;
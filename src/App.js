import React from 'react';
import './App.css';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import TimeSchedular from './Container/TimeSchedular/TimeSchedular';
import FrontPage from './Container/FrontPage/FrontPage'
class App extends React.Component {

  render(){
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact component={FrontPage} />
    <Route path="/timeSchedular" component={TimeSchedular} />
    </Switch>
    </div>
  );
  }
}

export default withRouter(App);

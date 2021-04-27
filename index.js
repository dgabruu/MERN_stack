import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router , Switch , Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Nav from './nav'
import Dis from './display'

const history=createBrowserHistory();


ReactDOM.render(
  <Router history={history}>
    
    <Switch>
    <Route exact path='/' component={()=><App><Nav /></App>}></Route>
    <Route exact path='/display' component={()=><Dis><Nav/></Dis>}></Route>
    </Switch>
    </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


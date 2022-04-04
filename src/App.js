import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MineSweeper from './containers/MineSweeper';

const App = () => {
  return (
    <Router>
      <div className = 'App'>
      <Switch>
        <Route path='/'>
          <MineSweeper/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

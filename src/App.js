import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <h1>Lost and Found Platform</h1>
          <Switch>
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

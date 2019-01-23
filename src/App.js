import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';
import NavBar from './components/Frontend/NavBar/NavBar';
import HomePage from './components/Frontend/HomePage/HomePage';
import SignUp from './components/Frontend/SignUp/SignUp';
import Login from './components/Frontend/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="games">
          <NavBar />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/SignUp' component={SignUp} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;



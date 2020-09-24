import React, {Component} from 'react';
import User from './components/User';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component{

  render(){
  
    return (
      <div className = "container">
        <Navbar 
        title = "User App"
        />
        <hr/>
        <User 
          name = 'Ilahiya'
          company = ''
          salary = "2500"
        />
        <br/>
        <User 
          name = 'Ilahiya'
          salary = "2500"
        />
      </div>
    );
    }
}

export default App;

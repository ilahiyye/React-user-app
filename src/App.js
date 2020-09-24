import React, {Component} from 'react';
import './App.css';
import Users from './components/Users';
import Navbar from './components/Navbar';

class App extends Component{
  state = {
    users: [
      {
        id: 1,
        name:   'Ilahiya',
        company:'ARIS',
        salary: '2500',

      },
      {
        id:2,
        name:   'Sevinc',
        company:'DIA',
        salary: '1000',
      }
    ]
  }

  render(){
  
    return (
      <div className = "container">
        <Navbar 
        title = "User App"
        />
        <hr/>
        <Users users = {this.state.users}/>
      </div>
    );
    }
}

export default App;

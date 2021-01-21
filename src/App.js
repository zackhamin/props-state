import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'


class App extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <Person name="Max" age="28" />
      <Person name="Manu" age="22" />
      <Person name="Simon" age="16" />
    </div> );
  }
}
 
export default App;
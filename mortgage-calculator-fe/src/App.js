import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Mortgage Calculator</h1>
        <Navbar/>
        <Calculator/>
        <Footer/>
      </div>
    );
  }
}

export default App;

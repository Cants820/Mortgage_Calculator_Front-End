import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import {Container,Row} from 'reactstrap';


class App extends Component {
  render() {
    return (

      // Using react-bootstrap components to layout the page
      <Container>
        <Row> 
          <Navbar/>
        </Row> 
       
        <Row>
          <Calculator/>
        </Row>
        
      
      
      </Container>
    );
  }
}

export default App;

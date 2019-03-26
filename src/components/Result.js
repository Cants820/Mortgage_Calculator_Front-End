import React from 'react';
import { Navbar, NavbarBrand,ListGroup,ListGroupItem } from 'reactstrap';

const Result = (props) => {
    return (
      <div>
          <Navbar color="light" light expand="md">
          <NavbarBrand className="display-3"><b>Results</b></NavbarBrand>
          </Navbar>
          <br/>       
                 
                
                 

                 <ListGroup>
                    <ListGroupItem><p>Loan Amount: ${props.loan}</p></ListGroupItem>
                    <ListGroupItem><p>Principal and Interest: ${props.prinInterest}</p></ListGroupItem>
                    <ListGroupItem><p>Monthly Tax: ${props.monthlyTax}</p></ListGroupItem>
                    <ListGroupItem><p>Monthly Insurance: ${props.monthlyInsurance}</p></ListGroupItem>
                    <ListGroupItem><p>Total Payment: ${props.total}</p></ListGroupItem>
                  </ListGroup>
      </div>
    )
  };

  Result.defaultProps = {
        loan : 0,
        prinInterest: 0,
        monthlyTax: 0,
        monthlyInsurance: 0,
        total: 0
      };




export default Result;
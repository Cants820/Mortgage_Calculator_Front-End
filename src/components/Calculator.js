import React, { Component } from 'react';

//elements needed for a bootstrap-react form
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Result from './Result';
import calculations from '../utils/calculations';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homePrice: 0, //some may call this 
            downPayment: 0, //
            interestRate: 0, // change this to decimal
            loanTerm: 0,  //
            additionalPrincipalPayment: 0,
            showPayPlan: false,
            mortgage: null
        };
        this.onClick = this.onClick.bind(this);
        this.onCalculate = this.onCalculate.bind(this);

    }


    onClick = () => {
        this.setState({
            showPayPlan: true
        })
    }
    reset = () => {
        this.setState({
            showPayPlan: false
        })
    }
    // function to communicate with mortgage-js
    onCalculate = () => {
        const cal = calculations(this.state.homePrice, this.state.downPayment, this.state.interestRate,
            this.state.loanTerm, this.state.additionalPrincipalPayment);

        console.log(cal.loanAmount); //to check whelther the object was correctly sent over.
       
         this.setState({mortgage: cal})
       
    }



    render() {
        // console.log("mortage: ",this.state.mortgage); I had to place this console.log since I had an issue passing an object as a prop. Since setState method is asynchronous I would get an undefined. Used this console.log for debugging.
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="home-price">Home Price:</Label>
                        <Input type="input" name="home-price" id="homeP" value={this.state.homePrice} onChange={event => this.setState({ homePrice: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="down-payment">Down Payment:</Label>
                        <Input type="input" name="down-payment" id="downP" value={this.state.downPayment} onChange={
                            event => this.setState({ downPayment: event.target.value })
                        } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="interest-rate">Interest Rate:</Label>
                        <Input type="input" name="interest-rate" id="interestR" value={this.state.interestRate} onChange={event => this.setState({ interestRate: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="loan-term">Loan Term:</Label>
                        <Input type="input" name="loan-term" id="loanT" value={this.state.loanTerm} onChange={event => this.setState({ loanTerm: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="add-pay">Additional Principal Payment:</Label>
                        <Input type="input" name="add-pay" id="addPP" value={this.state.additionalPrincipalPayment} onChange={event => this.setState({ additionalPrincipalPayment: event.target.value })} />
                    </FormGroup>


                    <Button onClick={this.onClick}>Submit</Button>

                </Form>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.onCalculate}>Calculator</button>
                {/* Results using a ternary operator to load <Result> from an onclick */}
                <div>{this.state.showPayPlan ?
                    <Result
                     

                    /> : null}</div>
            </div>
        )

    }


}

export default Calculator;
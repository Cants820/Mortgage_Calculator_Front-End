import React, { Component } from 'react';

//elements needed for a bootstrap-react form
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Result from './Result';


class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialDeposit: 0, //some may call this 
            monthlyIncome: 0, //
            interestRate: 0, // change this to decimal
            Term: 0,  //
            monthlyExpenses: 0,
            showPayPlan: false,
            
        };
        this.onClick = this.onClick.bind(this);
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


    render() {

        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="initial-deposit">Initial Deposit:</Label>
                        <Input type="input" name="initial-deposit" id="initialDeposit" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="monthly-income">Monthly Income:</Label>
                        <Input type="input" name="monthly-income" id="monthlyIncome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="interest-rate">Interest Rate:</Label>
                        <Input type="input" name="interest-rate" id="interestRate" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="monthly-expenses">Monthly Expenses:</Label>
                        <Input type="input" name="monthly-expenses" id="monthly-expenses" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="term">Term:</Label>
                        <Input type="input" name="term" id="term" />
                    </FormGroup>


                    <Button onClick={this.onClick}>Submit</Button>

                </Form>
                    <button onClick={this.reset}>Reset</button>
                {/* Results using a ternary operator to load <Result> from an onclick */}
                <div>{this.state.showPayPlan ? <Result /> : null}</div>
            </div>
        )

    }


}

export default Calculator;
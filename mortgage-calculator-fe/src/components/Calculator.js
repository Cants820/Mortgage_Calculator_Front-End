import React, { Component } from 'react';

class Calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            initialDeposit: 0,
            monthlyIncome: 0,
            interestRate: 0,
            Term: 0,
            monthlyExpenses: 0
        };
    }
    render() {

        return(

            <div>
                <form>
                First name:<br/>
                    <input type="text" name="firstname" value="Mickey"/>
                    <br/>
                    Last name:<br/>
                    <input type="text" name="lastname" value="Mouse"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        )

    }


}

export default Calculator;
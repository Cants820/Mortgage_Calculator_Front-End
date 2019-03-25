import React from 'react';


// const defaultProps = {
//     loan : 0,
//     prinInterest: 0,
//     monthlyTax: 0,
//     monthlyInsurance: 0,
//     total: 0
//   };


// class Result extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

   
//     render() {

//         return(

//             <div>
//                 <h1>Result</h1>
//                 <p>Loan Amount: ${this.props.loan}</p>
//                 <p>Principal and Interest: ${this.props.prinInterest}</p>
//                 <p>Monthly Tax: ${this.props.monthlyTax}</p>
//                 <p>Monthly Insurance: ${this.props.monthlyInsurance}</p>
//                 <p>Total Payment: ${this.props.total}</p>
//             </div>
//         )

//     }


// }


const Result = (props) => {
    return (
      <div>
          <h1>Result</h1>
                 <p>Loan Amount: ${props.loan}</p>
                 <p>Principal and Interest: ${props.prinInterest}</p>
                 <p>Monthly Tax: ${props.monthlyTax}</p>
                 <p>Monthly Insurance: ${props.monthlyInsurance}</p>
                 <p>Total Payment: ${props.total}</p>
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

// Result.defaultProps = defaultProps;




export default Result;
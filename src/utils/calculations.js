export default function calculations(totalPrice, downPayment, interestRate, loanTerm, additionalPrincipal) {
   const mortgageJs = require("mortgage-js");    

    let mortgageCalculator = mortgageJs.createMortgageCalculator();
    mortgageCalculator.totalPrice = totalPrice;
    mortgageCalculator.downPayment = downPayment;
    mortgageCalculator.interestRate = interestRate;
    mortgageCalculator.months = loanTerm;
    mortgageCalculator.taxRate = additionalPrincipal;
    mortgageCalculator.insuranceRate = 0.0013;
    mortgageCalculator.mortgageInsuranceRate = 0.010;
    mortgageCalculator.mortgageInsuranceEnabled = true;
    mortgageCalculator.mortgageInsuranceThreshold = 0.2;
    mortgageCalculator.additionalPrincipalPayment = 100;
    let payment = mortgageCalculator.calculatePayment();
    return payment;
}
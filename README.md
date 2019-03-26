# Mortgage_Calculator_Front_End

## Deployed Site
 
   [Demo Site](https://mortgage-calculator-fe-react.herokuapp.com/)

## Summary 

    A simple app that calculates your mortgage. The app was made using React.js and mortgage-js. The app updates as you input values.

## Technologies and npm Packages used
    * React.js
    * mortgage-js
    * React-Bootstrap
## How it works
    
    Simply fill the textboxes on the left hand column. While inputting data, the right handside of the will calculate the mortgage needed to pay in realtime. The calculation is from mortgage-js which returns an object that is passed as props and assigned as states. With react you can use setState method dynamically update your state in realtime.

## Features

    The app demonstrates the usage of props and state. There is one stateless components which is Navbar. And two state components which are Calculator and Result. The logic in utils folder which calculations.js. The calculation returns an object which is passed as a prop to the Calculator component.

## Author 

    Joseph Cantos

## Licensed Use
    MIT License
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Navbar extends Component {

    render() {

        return(

            <div>
                <Jumbotron>
                    <h1 className="display-3">Mortgage Calculator</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    
                </Jumbotron>
            </div>
        )

    }


}

export default Navbar;
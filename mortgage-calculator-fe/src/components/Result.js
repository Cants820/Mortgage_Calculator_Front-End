import React, { Component } from 'react';

class Result extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
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

export default Result;
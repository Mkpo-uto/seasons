import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        //Initializes state object and assigns a value of null to it's property "latitude"
        //THIS IS THE ONLY TIME a direct assignment to this.state can be done
        this.state = { lat: null, errorMessage:'' };
        //Retrieve current location when state is initialized
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //take attribute latitude out of position object to update lat value 
                //by calling setState!!!
                this.setState({ lat:position.coords.latitude});
            },
            err => {
               this.setState({ errorMessage:err.message});
            }
        );
    }


    //  React requires definition of render method
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}    
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
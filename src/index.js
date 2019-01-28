import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        //Initializes state object and assigns a value of null to it's property "latitude"
        //THIS IS THE ONLY TIME a direct assignment to this.state can be done
        this.state = { lat: null, errorMessage:'' };
       
    }

 componentDidMount(){
         //Retrieve current location when state is initialized
         window.navigator.geolocation.getCurrentPosition(
             //take attribute latitude out of position object to update lat value 
             //by calling setState!!!
            position => this.setState({ lat:position.coords.latitude}),
            err => this.setState({ errorMessage:err.message})
            
        );
 }


    //  React requires definition of render method
    render() {

        //Return different jsx depending upon the state and props of our component
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
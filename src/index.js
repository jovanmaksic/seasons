import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMassage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errorMassage: err.message                    
                });
            }
        );  d
    }


    render() {        
        if( this.state.errorMassage && !this.state.lat){
            return <div>Error: {this.state.errorMassage}</div>
        } 
        if (this.state.lat && !this.state.errorMassage){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
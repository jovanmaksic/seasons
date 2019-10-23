import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    console.log(window);
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return(
        <div> Hid</div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
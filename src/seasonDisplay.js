import React from 'react';

const seasonConfig = {
    summer: {
        text: 'bezimo na plazu',
        iconName: 'sun'
    },
    winter: {
        text: 'brrr napolju je hladno',
        iconName: 'snowflake'
    }
}

const getSeason =(lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season] //{text, iconName}
    return (
        <div>
            <i className={`icon ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon ${iconName}`} />
        </div> 
    );

};

export default SeasonDisplay;
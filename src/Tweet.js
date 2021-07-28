import React from 'react';

function Tweet(props) {
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>This is a random tweet</p>
            <h3>Number of likes</h3>
        </div>
    )
}

export default Tweet;
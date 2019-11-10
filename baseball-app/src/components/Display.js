import React from 'react';

const Display = (props) => {

    return (
        <>
            <div>
                <h2>Balls:</h2>
                {props.value.ball}
            </div>
            <div>
                <h2>Strikes:</h2>
                {props.value.strike}
            </div>
        </>
    )
}

export default Display; 
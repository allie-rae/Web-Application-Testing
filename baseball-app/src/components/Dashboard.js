import React from 'react';

const Dashboard = (props) => {

    const onHit = () => {
        props.setValue({
            ball: 0,
            strike: 0,
            foul: 0
        })
    }

    const onStrike = () => {
        if (props.value.strike < 2){
            props.setValue({
                ...props.value, 
                strike: props.value.strike + 1
            })
        } else {
            props.setValue({
                ball: 0,
                strike: 0,
                foul: 0
            })
        }
    }

    const onBall = () => {
        if (props.value.ball < 3){
            props.setValue({
                ...props.value,
                ball: props.value.ball + 1
            })
        } else {
            props.setValue({
                ball: 0,
                strike: 0,
                foul: 0
            })
        }
    }

    const onFoul = () => {
            if (props.value.strike < 2) {
                props.setValue({
                    ...props.value,
                    strike: props.value.strike + 1
                }) 
            }
    }



    return (
        <>
        <button onClick={onStrike}>Strike</button>
        <button onClick={onBall}>Ball</button>
        <button onClick={onFoul}>Foul</button>
        <button onClick={onHit}>Hit</button>
        </>
    )
}

export default Dashboard;
import React from 'react'

function Ship(props) {
    return (
        <div className="ship">
            <p>{props.name}</p>
            <p>{props.model}</p>
            <p>{props.class}</p>
            <p>{props.crew}</p>
        </div>
    )
}

export default Ship

import React from 'react'

function Alert(props) {
    return (
        <div style={{'height':'9vh'}}>

            {props.Alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{props.Alert}</strong>
            </div>}
        </div>
    )
}

export default Alert
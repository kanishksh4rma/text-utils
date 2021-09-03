import React from 'react'

function Alert(props) {
    return (
        props.txt && <div className="alert alert-success alert-dismissible fade show" role="alert"  >
            <strong>Success:</strong> {props.txt}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert



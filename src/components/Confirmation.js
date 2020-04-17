import React from 'react'

const Confirmation = (props) => {
    const handleCancel = (e) => {
        let container = document.querySelector('.confirmation-component__box');
        if((container && !container.contains(e.target)) || e.target.name === "cancel"){
            props.onCancel()
        }
    }
    return (
        <div onClick={handleCancel} className="confirmation-component">    
            <div className="confirmation-component__box">
                <h2 className="confirmation-component__box--title">Are you sure?</h2>
                {props.optionalText && <p>{props.optionalText}</p>}
                <button className="button" name="cancel">Cancel</button>
                <button className="button button--secondary" onClick={props.onConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Confirmation

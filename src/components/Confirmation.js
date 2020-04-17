import React from 'react'

const Confirmation = (props) => {
    return (
        <div className="confirmation-component">    
            <div className="confirmation-component__box">
                <h2 className="confirmation-component__box--title">Are you sure?</h2>
                <p>Removing Expense</p>
                <button className="button" onClick={props.onCancel}>Cancel</button>
                <button className="button button--secondary" onClick={props.onConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Confirmation

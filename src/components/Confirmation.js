import React from 'react'

const Confirmation = (props) => {
    return (
        <div className="confirmation-component">    
            <div className="confirmation-component__box">
                <h2 className="confirmation-component__box--title">Are you sure?</h2>
                <p>Removing Expense</p>
                <button className="button" onClick={props.onConfirm}>Cancel</button>
                <button className="button button--remove" onClick={() => this.onRemove()}>Remove</button>
            </div>
        </div>
    )
}

export default Confirmation

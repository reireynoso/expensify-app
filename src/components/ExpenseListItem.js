import React from 'react'

export default (props) => {
    const {description, amount, createdAt} = props.expense
    return (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
    )
}
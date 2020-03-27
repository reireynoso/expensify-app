import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: "",
        note: "",
        amount: ""

    }

    onDescriptionChange = (e) => {
        const description  = e.target.value;
        this.setState(() => ({
            description
        }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        console.log(note)
        this.setState(() => ({
            note
        }))
    }

    amountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }
    render(){
        console.log(this.state)
        return (
            <div>
               <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={this.amountChange}
                        value={this.state.amount}
                    />
                    
                    <br></br>
                    
                    <textarea
                        placeholder="Add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    
                    </textarea>

                    <button>Add Expense</button>
               </form>
            </div>
        )
    }
}
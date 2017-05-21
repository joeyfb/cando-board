import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({
                 dispatch,
                 listId
               }) =>
{
    let input

    return (
        <div className="form add-item">
            <form onSubmit={e => {
                            e.preventDefault()

                            if ( ! input.value.trim())
                            {
                                return
                            }

                            dispatch(addItem(listId, input.value))

                            input.value = ""
                       }}>
                
                <input ref={node => {input = node}} />

                <button type="submit">
                    add
                </button>

            </form>
        </div>
    )
}

AddItem = connect()(AddItem)

export default AddItem

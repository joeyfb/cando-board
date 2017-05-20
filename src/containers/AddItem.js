import React from 'react'
import { connect } from 'react-redux'

let AddItem = ({
                 dispatch  
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

                            // dispatch action
                            
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

export default AddItem

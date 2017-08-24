import React from 'react';
import { connect } from 'react-redux';
import { createEntity } from '../actions';

const addCard = (title, parentID) => 
  createEntity({
    title,
    object: 'card',
    refs: []
  }, parentID);

let AddItem = ({
  dispatch,
  listId,
  onMouseUp
}) =>
{
    let input;

    return (
        <div
          onMouseUp={onMouseUp}
          className="form add-card">
            <form onSubmit={e => {
                            e.preventDefault()

                            if ( ! input.value.trim())
                            {
                                return;
                            }

                            dispatch(addCard(input.value, listId));

                            input.value = "";
                       }}>
                
                <input ref={node => {input = node}} />

                <button type="submit">
                    add
                </button>

            </form>
        </div>
    )
}

AddItem = connect()(AddItem);

export default AddItem;

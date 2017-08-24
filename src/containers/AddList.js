import React from 'react';
import { connect } from 'react-redux';
import { createEntity } from '../actions';

const addList = (title, parentID) => 
  createEntity({
    title,
    object: 'list',
    refs: []
  }, parentID);

let AddList = ({
  dispatch,
  boardID
}) =>
{
    let input

    return (
        <div className="form add-list">
            <form onSubmit={e => {
                                e.preventDefault();
                                
                                if ( ! input.value.trim() )
                                {
                                    return;
                                }

                                dispatch(addList(input.value, boardID));
                                input.value = "";
                            }}>

                <input ref={node => {input = node}}/>
                
                <button type="submit">
                    add
                </button>
            </form>
        </div>
    )
};

AddList = connect()(AddList);

export default AddList;

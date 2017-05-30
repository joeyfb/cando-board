import React from 'react';
import { connect } from 'react-redux';
import { removeList, moveClear, moveCard } from '../actions';
import List from '../components/List';

const mapStateToProps = (state, ownProps) =>
{
  let list = state.lists.find( (l) =>
      l.id === ownProps.id
  );

  return {
    ...list,
    moving: state.moving
  };
}

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseUp: (moving) =>
  {
    if ( ! moving.lists || moving.lists[0].id === ownProps.id)
    {
      dispatch(moveClear());
      return;
    }

    const pos = moving.pos;
    const startList = moving.lists[0];
    const startCards = startList.cards;
    const stopId = ownProps.id;
    
    dispatch(moveCard(0, startList.id, startCards, stopId));
    dispatch(moveClear());
  },

  onClick: () =>
    {
      const message = 'This cannot be undone, are you sure?';
      
      if ( ! confirm(message) )
      {
        return;
      }

      dispatch(removeList(ownProps.id));
    }
})

const ChangableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ChangableList;

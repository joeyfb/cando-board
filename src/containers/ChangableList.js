// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { removeList, moveClear, moveCard, removeCard } from '../actions';
import List from '../components/List';

const mapStateToProps = (state, ownProps) =>
{
  let list = state.lists.find( (l) =>
      l.id === ownProps.id
  );

  return {
    ...list,
    start: state.moving
  };
}

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseUp: (e, start, id, pos) =>
  {
    e.stopPropagation();

    if ( ! start.lists )
    {
      dispatch(moveClear());
      return;
    }

    const startList = start.lists[0];
    const startCards = startList.cards;
    
    dispatch(moveCard(pos, startList.id, startCards, id));
    dispatch(moveClear());
  },

  onClick: (cards) =>
    {
      const message = 'This cannot be undone, are you sure?';
      
      if ( ! confirm(message) )
      {
        return;
      }

      cards.map( (id) => dispatch(removeCard(0, id)) );

      dispatch(removeList(ownProps.id));
    }
})

const ChangableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ChangableList;

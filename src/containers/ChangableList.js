// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { 
    moveClear,
    moveCard,
    updateList
  } from '../actions';

const mapStateToProps = (state, ownProps) =>
{
  const list = state.lists.find( (l) =>
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

    dispatch(moveCard(pos, startList.id, startList.cards, id));
    dispatch(moveClear());
  },

  onEditTitle: (title) =>
  {
    dispatch(updateList(ownProps.id, title));
  }
});

const ChangableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ChangableList;

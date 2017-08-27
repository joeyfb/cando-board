// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { 
    moveClear,
    updateEntity
  } from '../actions';

const updateList = (id, title, refs=[]) =>
  updateEntity({
    id,
    title,
    refs
  });

const moveCard = (id, cards, pos) =>
  updateEntity({
     id,
     refs: cards
  });

const mapStateToProps = (state, ownProps) =>
{
  const moving = state.moving;
  const list = state.entities
              .find(e => e.id === ownProps.id);

  return {
    ...list,
    start: moving
  };
}

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseUp: (e, start, id, pos) =>
  {
    e.stopPropagation();

    if ( ! start.entities )
    {
      dispatch(moveClear());
      return;
    }

    const startList = start.entities[0];

    dispatch(moveCard(id, startList.refs));
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

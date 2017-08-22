// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { moveStart } from '../actions';
import Card from '../components/Card';

const isMoving = (moving, id) =>
{
  const list = moving.hasOwnProperty('lists')
               ? moving.lists[0]
               : false;
  const cardId = list ? list.cards[0] : false;

  return cardId && cardId === id;
};

const mapStateToProps = (state, ownProps) =>
{ 
  const card = state.entities
              .find(e => e.id === ownProps.id);

  return {
    ...card,
    isMoving: isMoving(state.moving, ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseDown: () =>
  {
      dispatch(moveStart(ownProps.listId, ownProps.id))
  }
});

const ChangableCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default ChangableCard;

// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { removeEntity, removeCard } from '../actions';
import DeleteButton from '../components/DeleteButton';

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onClick: () =>
  {
    const message = 'This cannot be undone, are you sure?';

    if ( ! confirm(message) )
    {
      return;
    }

    if (ownProps.cards)
    {
      ownProps.cards.map( (id) => dispatch(removeCard(id)) );
    }

    dispatch(removeEntity(ownProps.listId, ownProps.cardId));
  }
});

const EntityDelete = connect(
  null,
  mapDispatchToProps
)(DeleteButton);

export default EntityDelete;

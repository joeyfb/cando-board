// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { deleteEntity } from '../actions';
import DeleteButton from '../components/DeleteButton';

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onClick: () =>
  {
    const message = 'This cannot be undone, are you sure?';

    if ( ! confirm(message)) return;

    dispatch(deleteEntity(ownProps.id));
  }
});

const EntityDelete = connect(
  null,
  mapDispatchToProps
)(DeleteButton);

export default EntityDelete;

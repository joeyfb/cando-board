// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { moveClear } from '../actions';

const mapStateToProps = (state, ownProps) =>
{
  const moving = state.moving;
  const board = state.entities
              .find(e => e.object === 'board');
 
  console.log(board);
  return {
    ...board,
    moving
  };
};

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseUp: () => dispatch(moveClear())
});

const StateBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default StateBoard;

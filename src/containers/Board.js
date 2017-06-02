// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state, ownProps) => state.board;

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onMouseUp: () => {
    console.log('in board mouseup')
  }
})

const StateBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default StateBoard 

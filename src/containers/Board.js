import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state) =>
({
  title: state.title,
  lists: state.lists
})

const StateBoard = connect(
    mapStateToProps
)(Board)

export default StateBoard 

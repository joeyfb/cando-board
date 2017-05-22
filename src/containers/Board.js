import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'

const StateBoard = connect(
    (state) => ( state )
)(Board)

export default StateBoard 

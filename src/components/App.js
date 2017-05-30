import React from 'react'
import Board from '../containers/Board'
import Header from './Header'
import Nav from './Nav'

const App = () => (
  <div
    onDragExit={ () => {
      console.log('board mouse up')
    }} 
  >
    <Header />
    <Nav />

    <Board />
  </div>
)

export default App

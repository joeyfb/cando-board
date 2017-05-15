import React from 'react'
import Board from './Board'

// fake incoming data from container
const data = {
                lists: [
                        {
                            title: "To do",
                            items: [
                                        {
                                            title: "make containers"
                                        }
                                   ]
                        }
                       ]
             }

const App = () => (
  <div>
    <Board
        title="Title pulled from state..."
        lists={data.lists}
    />
  </div>
)

export default App

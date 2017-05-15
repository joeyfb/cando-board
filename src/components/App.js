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
                                        },
                                        {
                                            title: "action stuff"
                                        }
                                   ]
                        },
                        {
                            title: "doing",
                            items: [
                                        {
                                            title: "pure"
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

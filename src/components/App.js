import React from 'react'
import Board from './Board'
import Header from './Header'
import Nav from './Nav'

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
                            title: "Doing",
                            items: [
                                        {
                                            title: "pure",
                                            description: "I have no clue what I meant when I wrote pure",
                                            created: "May 15th, 2017"
                                        }
                                   ]
                        }
                       ]
             }

const App = () => (
  <div>
    <Header />
    <Nav />

    <Board
        title="Title pulled from state..."
        lists={data.lists}
    />
  </div>
)

export default App

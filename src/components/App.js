import React from 'react'
import Board from './Board'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

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
    <Footer />
  </div>
)

export default App

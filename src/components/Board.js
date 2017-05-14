import React from 'react'
import List from './List'

const Board = ({
                title,
                created,
                lists
               }) =>
(
    <article className="board">
        <header className="board-title">
            <h1>
                {title}
            </h1>
        </header>
       
        {lists.map(list =>
            <List
                title={list.title}
                items={list.items}
            />
        )}

        <footer>
            footer stuff...
        </footer>

    </article>  
)

export default Board

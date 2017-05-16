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
            <h2>
                {title}
            </h2>
        </header>
       
        <div className="lists-wrapper">
            {lists.map(list =>
                <List
                    title={list.title}
                    items={list.items}
                />
            )}
        </div>

        <footer>
        </footer>

    </article>  
)

export default Board

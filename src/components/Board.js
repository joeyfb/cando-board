import React from 'react'
import List from './List'
import AddList from '../containers/AddList.js'

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
            
            <section className="board-list">
                <header className="board-header">
                    <h3>
                        New List
                    </h3>
                </header>
                
                <AddList />
            </section>
        </div>

        <footer>
        </footer>

    </article>  
)

export default Board

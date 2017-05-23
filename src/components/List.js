import React from 'react'
import ChangableItem from '../containers/ChangableItem'
import AddItem from '../containers/AddItem'

const List = ({
                title,
                id,
                items
              }) =>
(
    <section className="board-list">
        <header className="board-header">
            <h3>
                {title}
            </h3>
        </header>

        <ul className="item-list">
            {items.map(item =>
                <ChangableItem
                    key={item.id}
                    id={item.id}
                    listId={id}
                />
            )}

            <li>
                <AddItem 
                  listId={id}
                />
            </li>
        </ul>
    </section>
)

export default List

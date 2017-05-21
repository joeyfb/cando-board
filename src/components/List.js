import React from 'react'
import Item from './Item'
import AddItem from '../containers/AddItem'

const List = ({
                title,
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
                <Item
                    title={item.title}
                    key={item.id}
                    description={item.description}
                    created={item.created}
                />
            )}

            <li>
                <AddItem />
            </li>
        </ul>
    </section>
)

export default List

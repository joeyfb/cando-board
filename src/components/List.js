import React from 'react'
import Item from './Item'

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
                    description={item.description}
                    created={item.created}
                />
            )}
        </ul>
    </section>
)

export default List

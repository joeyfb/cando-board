import React from 'react'
import DeleteButton from './DeleteButton'
import ChangableItem from '../containers/ChangableItem'
import AddItem from '../containers/AddItem'

const List = ({
                title,
                id,
                items,
                onClick
              }) =>
(
    <section className="board-list">
        <header className="board-header">
            <h3>
              {title}

              <DeleteButton
                onClick={onClick}
              />
            </h3>
        </header>

        <ul className="item-list">
            {items.map(iId =>
                <ChangableItem
                    key={iId}
                    id={iId}
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

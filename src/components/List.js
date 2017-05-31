import React from 'react'
import DeleteButton from './DeleteButton'
import ChangableCard from '../containers/ChangableCard'
import AddCard from '../containers/AddCard'

const List = ({
  title,
  id,
  cards,
  onClick,
  start,
  onMouseUp
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

        <ul
          className="card-list"
          onMouseUp={(e) => onMouseUp(e, start, id)}
        >
            {cards.map( (cardId, pos) =>
                <ChangableCard
                    key={cardId}
                    id={cardId}
                    listId={id}
                    onMouseUp={(e) => onMouseUp(e, start, id, pos)}
                />
            )}

            <li>
                <AddCard 
                  onMouseUp={(e) => onMouseUp(e, start, id, 10000)}
                  listId={id}
                />
            </li>
        </ul>
    </section>
)

export default List

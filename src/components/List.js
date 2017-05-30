import React from 'react'
import DeleteButton from './DeleteButton'
import ChangableCard from '../containers/ChangableCard'
import AddCard from '../containers/AddCard'

const List = ({
  title,
  id,
  cards,
  onClick,
  moving,
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
          onMouseUp={() => onMouseUp(moving)}
          className="card-list"
        >
            {cards.map(iId =>
                <ChangableCard
                    key={iId}
                    id={iId}
                    listId={id}
                />
            )}

            <li>
                <AddCard 
                  listId={id}
                />
            </li>
        </ul>
    </section>
)

export default List

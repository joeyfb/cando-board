import React from 'react';
import EntityDelete from '../containers/EntityDelete';
import ChangableCard from '../containers/ChangableCard';
import AddCard from '../containers/AddCard';
import Field from '../containers/EditableField';

const List = ({
  title,
  id,
  cards,
  onEditTitle,
  start,
  onMouseUp
}) =>
(
    <section className="board-list">
        <header 
          onMouseUp={(e) => onMouseUp(e, start, id, 0)}
          className="board-header"
        >
            <h3>
              <Field 
                text={title}
                onsubmit={onEditTitle}
              />

              <EntityDelete
                listId={id}
                cards={cards} 
              />
            </h3>
        </header>

        <ul
          className="card-list"
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
);

export default List;

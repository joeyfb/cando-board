import React from 'react';
import ChangableList from '../containers/ChangableList';
import AddList from '../containers/AddList.js';

const Board = ({
  title,
  created,
  lists,
  moving,
  onMouseUp
}) =>
{
  const isMoving = moving.hasOwnProperty('lists');
  const moveClass = (isMoving) ? ' moving ' : '';

  return (
    <article
      className={'board' + moveClass}
      onMouseUp={onMouseUp}
    >
        <header className="board-title">
            <h2>
                {title}
            </h2>
        </header>
       
        <div className="lists-wrapper">
            {lists.map(listId =>
                <ChangableList
                    id={listId}
                    key={listId}
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
  );
};
export default Board;

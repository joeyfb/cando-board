import React from 'react';
import DeleteButton from './DeleteButton';

const Card = ({
  title,
  description,
  id,
  created,
  checklists,
  onClick,
  onMouseDown,
  onMouseUp,
  isMoving
}) =>
{
  let movingClass = (isMoving) ? ' moving-card ' : '';

  return(
     <li>
         <div
           onMouseDown={onMouseDown}
           onMouseUp={onMouseUp}
           className={'card' + movingClass}
          > 
            <h4>
                {title}

                <DeleteButton
                  onClick={onClick}
                />
            </h4>

            <div className="inner-card">
                <p className="description">
                    {description} 
                </p>

                <p className="date">
                    {created} 
                </p> 
            </div>
         </div>
     </li>
  );
}

export default Card

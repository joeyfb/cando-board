import React from 'react';
import EntityDelete from '../containers/EntityDelete';

const Card = ({
  title,
  description,
  id,
  created,
  checklists,
  onMouseDown,
  onMouseUp,
  isMoving
}) =>
{
  let movingClass = (isMoving) ? ' moving-card ' : '';

  return(
     <li>
         <div
           className={'card' + movingClass}
          > 
            <h4>
                <span
                 onMouseDown={onMouseDown}
                 onMouseUp={onMouseUp}
                >
                  {title}
                </span>

                <EntityDelete id={id} />
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

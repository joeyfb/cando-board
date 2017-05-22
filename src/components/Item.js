import React from 'react'
import DeleteButton from './DeleteButton'

const Item = ({
                title,
                description,
                id,
                created,
                checklists,
                onClick
              }) =>
(
     <li>
         <div className="card-item"> 
            <h4>
                {title}

                <DeleteButton
                  onClick={onClick}
                />
            </h4>

            <div className="inner-item">
                <p className="description">
                    {description} 
                </p>

                <p className="date">
                    {created} 
                </p> 
            </div>
         </div>
     </li>
)

export default Item

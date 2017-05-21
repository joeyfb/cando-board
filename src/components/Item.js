import React from 'react'

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

                <span
                  className="delete-self"
                  onClick={() => onClick()}
                >X
                </span>
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

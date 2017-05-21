import React from 'react'

const Item = ({
                title,
                description,
                id,
                created,
                checklists,
              }) =>
(
     <li>
         <div className="card-item"> 
            <h4>
                {title}
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

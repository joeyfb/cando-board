import React from 'react'

const Item = ({
                title,
                description,
                checklists,
              }) =>
(
     <li>
         <div className="card-item">
             <h4>
                {title}
            </h4>
         </div>
     </li>
)

export default Item

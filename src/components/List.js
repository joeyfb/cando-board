import React from 'react'

const List = ({
                title,
                items
              }) =>
(
        <div className="lists-wrapper">
            <section className="board-list">
                <header className="board-header">
                    <h3>
                        {title}
                    </h3>
                </header>

                <ul className="item-list">
                    {items.map(item =>
                        <li>
                             <div className="card-item">
                                <h4>{item.title}</h4>
                             </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
)

export default List

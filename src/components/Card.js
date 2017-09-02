import React from 'react';
import EntityDelete from '../containers/EntityDelete';

class Card extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { isHover: false };
	}

	setHover(isHover)
  {
		this.setState( { isHover } )
  }

	render()
	{
		let movingClass = (this.props.isMoving) ? ' moving-card ' : '';
		let hoverClass = (this.state.isHover) ? ' hovering ' : '';

		return(
			 <li
         onMouseEnter={() => this.setHover(true)} 
         onMouseLeave={() => this.setHover(false)} 
         onMouseUp={this.props.onMouseUp}
         onMouseDown={this.props.onMouseDown}
       >
					 <div
						 className={'card' + movingClass + hoverClass}
						> 
							<h4>
									<span>
										{this.props.title}
									</span>

									<EntityDelete id={this.props.id} />
							</h4>

							<div className="inner-card">
									<p className="description">
											{this.props.description} 
									</p>

									<p className="date">
											{this.props.created} 
									</p> 
							</div>
					 </div>
			 </li>
		);
  }
}

export default Card

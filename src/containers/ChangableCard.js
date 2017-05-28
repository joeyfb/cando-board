import React from 'react'
import { connect } from 'react-redux'
import { removeCard } from '../actions'
import Card from '../components/Card'

const mapStateToProps = (state, ownProps) =>
{ 
  const item = state.cards.find( (i) =>
    i.id === ownProps.id
  )

  return item
}

const mapDispatchToProps = (dispatch, ownProps) =>
({
  onClick: () =>
    {
      const message = 'This cannot be undone, are you sure?'
      
      if ( ! confirm(message) )
      {
        return
      }

      dispatch(removeCard(ownProps.listId, ownProps.id))
    }
})

const ChangableCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)

export default ChangableCard

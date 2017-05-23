import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions'
import Item from '../components/Item'

const mapStateToProps = (state, ownProps) =>
{ 
  const list = state.lists.find( (l) =>
    l.id === ownProps.listId
  )
  
  const item = list.items.find( (i) =>
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

      dispatch(removeItem(ownProps.listId, ownProps.id))
    }
})

const ChangableItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default ChangableItem

import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions'
import Item from '../components/Item'

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
  null,
  mapDispatchToProps
)(Item)

export default ChangableItem

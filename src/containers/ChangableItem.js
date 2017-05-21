import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions'
import Item from '../components/Item'

const mapStateToProps = (state, ownProps) =>
({

})

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

const DeletableItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default DeletableItem

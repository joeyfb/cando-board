import React from 'react'
import { connect } from 'react-redux'
import { removeList } from '../actions'
import List from '../components/List'

const mapStateToProps = (state, ownProps) =>
{
  const list = state.lists.find( (l) =>
      l.id === ownProps.id
  )

  return list
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

      dispatch(removeList(ownProps.id))
    }
})

const ChangableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ChangableList

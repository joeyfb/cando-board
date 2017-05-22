import React from 'react'
import Button from './Button'

const DeleteButton = ({
  onClick
}) =>
(
  <Button
    type={'delete-button'}
    onClick={onClick}
  >
    X
  </Button>
)

export default DeleteButton

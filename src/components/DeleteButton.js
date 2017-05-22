import React from 'react'
import Button from './Button'

const DeleteButton = ({
  onClick
}) =>
(
  <Button
    type={'delete-button'}
    text={'X'}
    onClick={onClick}
  />
)

export default DeleteButton

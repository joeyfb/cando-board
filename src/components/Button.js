import React from 'react'

const Button = ({
                  type,
                  text,
                  onClick
                }) =>
(
  <span
    className={"button " + type}
    onClick={() => onClick()}
  >
    {text}
  </span>
)

export default Button

import React from 'react'

const Button = ({
                  type,
                  children,
                  onClick
                }) =>
(
  <span
    className={"button " + type}
    onClick={() => onClick()}
  >
    {children}
  </span>
)

export default Button

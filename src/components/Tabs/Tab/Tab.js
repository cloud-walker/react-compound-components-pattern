import React from 'react'

const Component = ({children, active, disabled, onActivate, ...rest}) => (
  <div
    onClick={!disabled && onActivate}
    {...rest}
  >
    {children}
  </div>
)

Component.displayName = 'Tab'

export default Component

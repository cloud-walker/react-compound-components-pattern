import React from 'react'

const Component = ({children, active, disabled, onActivate}) => (
  <div
    onClick={!disabled && onActivate}
    style={{
      borderBottom: active ? '4px solid' : 'none',
      marginRight: '1em',
      color: disabled ? 'grey' : 'black',
    }}
  >
    {children}
  </div>
)

Component.displayName = 'Tab'

export default Component

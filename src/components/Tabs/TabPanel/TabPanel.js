import React from 'react'

const Component = ({children, ...rest}) => (
  <div {...rest}>{children}</div>
)

Component.displayName = 'TabPanel'

export default Component

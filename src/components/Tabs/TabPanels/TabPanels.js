import React from 'react'

const Component = ({children, activeIndex, ...rest}) => (
  <div {...rest}>{children[activeIndex]}</div>
)

Component.displayName = 'TabPanels'

export default Component

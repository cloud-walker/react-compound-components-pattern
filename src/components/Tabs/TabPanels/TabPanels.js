import React from 'react'

const Component = ({children, activeIndex}) => (
  <div>{children[activeIndex]}</div>
)

Component.displayName = 'TabPanels'

export default Component

import React from 'react'

const Component = ({
  children,
  activeIndex,
  onActiveTab,
  ...rest
}) => (
  <div {...rest}>{React.Children.map(
    children,
    (child, i) => React.cloneElement(child, {
      active: activeIndex === i,
      onActivate: () => onActiveTab(i),
    }),
  )}</div>
)

Component.displayName = 'TabList'

export default Component

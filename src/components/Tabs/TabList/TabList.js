import React from 'react'

const Component = class extends React.Component {
  render() {
    const children = React.Children.map(
      this.props.children,
      (child, i) => React.cloneElement(child, {
        active: this.props.activeIndex == i,
        onActivate: () => {
          this.props.onActiveTab(i)
        }
      }),
    )
    return (
      <div style={{display: 'flex'}}>{children}</div>
    )
  }
}

Component.displayName = 'TabList'

export default Component

import React from 'react'

const Component = class extends React.Component {
  static displayName = 'Tabs'

  state = {activeIndex: 0}

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Component

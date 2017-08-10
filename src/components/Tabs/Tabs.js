import React from 'react'

import TabPanels from './TabPanels'
import TabList from './TabList'
import Tab from './Tab'
import TabPanel from './TabPanel'

const Component = class extends React.Component {
  static displayName = 'Tabs'
  static TabList = TabList
  static Tab = Tab
  static TabPanels = TabPanels
  static TabPanel = TabPanel

  state = {activeIndex: 1}

  render() {
    const children = React.Children.map(this.props.children, child => {
      switch (child.type) {
        case TabPanels:
          return React.cloneElement(child, {
            activeIndex: this.state.activeIndex,
          })
        case TabList:
          return React.cloneElement(child, {
            activeIndex: this.state.activeIndex,
            onActiveTab: activeIndex => this.setState({activeIndex})
          })
        default:
          return child
      }
    })

    return (
      <div>{children}</div>
    )
  }
}

export default Component

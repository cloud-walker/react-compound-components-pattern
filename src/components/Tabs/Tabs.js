import React from 'react'

const Component = class extends React.Component {
  static displayName = 'Tabs'

  get isGetterPropsUseValid() {
    const tabs = this.tabs
    const panels = this.panels

    return tabs === panels && tabs + panels >= 4
  }

  constructor(...args) {
    super(...args)
    this.getTabProps = this.getTabProps.bind(this)
    this.getPanelProps = this.getPanelProps.bind(this)
    this.handleChangeTab = this.handleChangeTab.bind(this)

    this.tabs = -1
    this.panels = -1

    this.state = {
      activeIndex: this.props.index || 0,
    }
  }

  handleChangeTab(activeIndex) {
    return () => this.setState({activeIndex})
  }

  getTabProps(props) {
    this.tabs++
    const index = this.tabs

    return {
      ...props,
      onClick: this.handleChangeTab(index),
      isActive: this.state.activeIndex === index,
    }
  }

  getPanelProps(props) {
    this.panels++
    const index = this.panels

    return {
      ...props,
      isActive: this.state.activeIndex === index,
    }
  }

  componentWillUpdate() {
    this.panels = -1
    this.tabs = -1
  }

  render() {
    const {activeIndex} = this.state
    const {getPanelProps, getTabProps} = this

    const result = this.props.children({
      activeIndex,
      getTabProps,
      getPanelProps,
    })

    if (!this.isGetterPropsUseValid) {
      console.warn(`
        Tabs and/or panels are not sufficient or
        not the same number!
        Please use the getterProps provided to add
        at least 2 panels and 2 tabs.
        `)
    }

    return result
  }
}

export default Component

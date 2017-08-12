import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

import Tabs from 'components/Tabs'

const ifActive = R.curry((a, b) =>
  R.ifElse(R.prop('isActive'), R.always(a), R.always(b)),
)

const TabList = styled.div`display: flex;`

const TabPanel = styled.div`
  border: 1px solid green;
  padding: 1rem;

  display: ${ifActive('block')('none')};
`

const Tab = styled.div`
  cursor: pointer;
  text-align: center;
  padding: .5rem;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;

  background-color: ${ifActive('red', 'white')};
`

const FluffyKin = styled.div`
  display: inline-block;
  padding: .5rem;
  border-radius: 50%;
  font-weight: ${ifActive('bold', 'normal')};
  background-color: #333;
  color: #eee;
  cursor: pointer;
`

const VerticalTabsLayout = styled.div`display: flex;`

const VerticalTabList = styled.div`
  display: flex;
  flex-direction: column;
`

const VerticalTab = styled.div`
  padding: .5rem;
  border: 1px solid;
  cursor: pointer;
  font-weight: ${ifActive('bold', 'normal')};
`

const VerticalLayoutPanel = styled.div`
  color: green;
  border: 1px solid;
  padding: 1rem;
  flex-grow: 1;
  display: ${ifActive('block', 'none')};
`

class App extends React.Component {
  static displayName = 'App'

  render() {
    return (
      <main>
        <Tabs>
          {({activeIndex, getTabProps, getPanelProps}) => {
            const pizzaTabProps = getTabProps()
            const sushiTabProps = getTabProps()
            const pastaTabProps = getTabProps()

            const pizzaPanelProps = getPanelProps()
            const sushiPanelProps = getPanelProps()
            const pastaPanelProps = getPanelProps()

            return (
              <div>
                <TabList>
                  <Tab {...pizzaTabProps}>pizza</Tab>
                  <Tab {...sushiTabProps}>sushi</Tab>
                  <Tab {...pastaTabProps}>pasta</Tab>
                </TabList>

                <div>
                  <TabPanel {...pizzaPanelProps}>
                    Pizza is the best food evah.
                    <FluffyKin {...sushiTabProps}>sushi</FluffyKin>
                  </TabPanel>
                  <TabPanel {...sushiPanelProps}>
                    Good sushi can be good almost as pizza!
                  </TabPanel>
                  <TabPanel {...pastaPanelProps}>Pasta is... pasta!</TabPanel>
                </div>

                <VerticalTabsLayout>
                  <VerticalTabList>
                    <VerticalTab {...pizzaTabProps}>pizza</VerticalTab>
                    <VerticalTab {...sushiTabProps}>sushi</VerticalTab>
                    <VerticalTab {...pastaTabProps}>pasta</VerticalTab>
                  </VerticalTabList>

                  <VerticalLayoutPanel {...pizzaPanelProps}>
                    Pizza is the best food evah.
                  </VerticalLayoutPanel>

                  <VerticalLayoutPanel {...sushiPanelProps}>
                    Good sushi can be good almost as pizza!
                  </VerticalLayoutPanel>

                  <VerticalLayoutPanel {...pastaPanelProps}>
                    Pasta is... pasta!
                  </VerticalLayoutPanel>
                </VerticalTabsLayout>
              </div>
            )
          }}
        </Tabs>
      </main>
    )
  }
}

export default App

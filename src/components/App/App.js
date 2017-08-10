import React from 'react'
import styled from 'styled-components'

import Tabs from 'components/Tabs'

const TabPanel = styled(Tabs.TabPanel)`
  color: red;
`
class App extends React.Component {
  static displayName = 'App'

  render() {
    return (
      <main>
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab>
              <a href="sadad" onClick={e => e.preventDefault()}>first tab</a>
            </Tabs.Tab>
            <Tabs.Tab>
              <i>second tab</i>
            </Tabs.Tab>
            <Tabs.Tab>
              button
            </Tabs.Tab>
          </Tabs.TabList>

          <Tabs.TabPanels>
            <TabPanel>
              <pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vero excepturi error odit maiores nobis reprehenderit omnis ducimus veritatis, tempore accusantium sequi veniam inventore magni, voluptas illo eligendi! Deleniti, inventore.</pre>
            </TabPanel>

            <TabPanel>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus sit velit nihil quidem necessitatibus odio, totam saepe, deleniti. Enim ut, voluptatum sunt, nisi similique rem accusamus in veniam iusto.</strong>
            </TabPanel>

            <TabPanel>
              <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ullam alias ex, suscipit illum quas dolor consequatur velit, eius, libero expedita adipisci nulla omnis ipsam cumque non quod. Vero, nulla.
              </i>
            </TabPanel>
          </Tabs.TabPanels>
        </Tabs>
      </main>
    )
  }
}

export default App

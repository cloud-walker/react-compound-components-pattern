import React from 'react'

import Tabs, {Tab, TabList, TabPanel, TabPanels} from 'components/Tabs'

class App extends React.Component {
  static displayName = 'App'

  render() {
    return (
      <main>
        <Tabs>
          <TabList>
            <Tab>
              <a href="sadad" onClick={e => e.preventDefault()}>first tab</a>
            </Tab>
            <Tab>
              <i>second tab</i>
            </Tab>
            <Tab disabled>
              <div style={{background: 'lightblue'}}>
                third tab
              </div>
            </Tab>
          </TabList>

          <TabPanels>
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
          </TabPanels>
        </Tabs>
      </main>
    )
  }
}

export default App

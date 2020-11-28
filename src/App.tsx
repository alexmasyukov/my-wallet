import React from 'react'
import { Layout } from './components/Layout/index'
import GlobalStyles from 'styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/themes/dark'
// import { light } from './styles/themes/light'
// import { ContentHeader } from 'components/ContentHeader'
// import { Dashboard } from 'pages/Dashboard'
import { List } from './pages/List/index'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        {/* <ContentHeader /> */}
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App

import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from 'pages/Dashboard'
import { List } from 'pages/List'
import { Layout } from 'components/Layout'

export const AppRoutes: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </Layout>
  )
}

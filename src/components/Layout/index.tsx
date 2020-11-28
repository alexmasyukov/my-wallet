import React, { FC } from 'react'
import { Aside } from 'components/Aside'
import { Content } from 'components/Content'
import { MainHeader } from 'components/MainHeader'
import { Grid } from './styles'

export const Layout: FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  )
}

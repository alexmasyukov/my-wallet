import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'

export const Routes: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

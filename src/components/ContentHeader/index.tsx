import React, { FC } from 'react'
import { Container, TitleContainer, Controllers } from './styles'

interface ContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

export const ContentHeader: FC<ContentHeaderProps> = ({
  title,
  lineColor,
  children
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  )
}

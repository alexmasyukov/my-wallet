import { ContentHeader } from 'components/ContentHeader'
import React, { FC } from 'react'
import { SelectInput } from 'components/SelectInput'
import { Container } from './styles'

export const Dashboard: FC = () => {
  const options = [
    {
      label: 'test',
      value: '1'
    }
  ]

  return (
    <Container>
      <ContentHeader title='Статистика' lineColor='#f7931b'>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

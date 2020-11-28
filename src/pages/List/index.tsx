import React, { FC } from 'react'
import { ContentHeader } from 'components/ContentHeader'
import { SelectInput } from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import { HistoryFinanceCard } from 'components/HistoryFinanceCard'

const months = [
  { value: '9', label: 'Сентябрь' },
  { value: '8', label: 'Август' },
  { value: '7', label: 'Июль' }
]

const years = [
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 }
]

export const List: FC = () => {
  const c = (
    <HistoryFinanceCard
      tagColor="#e44c4e"
      title="tessts"
      subtitle="12/04/2020"
      amount="R$ 130,00"
    />
  )

  const a = Array(50).fill(c)

  return (
    <Container>
      <ContentHeader title="Статистика" lineColor="#f7931b">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Повторяющиеся
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Единичные
        </button>
      </Filters>

      <Content>{a.map(c => c)}</Content>
    </Container>
  )
}

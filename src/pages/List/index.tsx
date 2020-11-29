import React, { FC, useMemo } from 'react'
import { ContentHeader } from 'components/ContentHeader'
import { SelectInput } from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import { HistoryFinanceCard } from 'components/HistoryFinanceCard'
import { RouteComponentProps } from 'react-router-dom'

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

const c = (
  <HistoryFinanceCard
    tagColor="#e44c4e"
    title="tessts"
    subtitle="12/04/2020"
    amount="R$ 130,00"
  />
)

const a = Array(50).fill(c)

type Links = 'income' | 'expense'

interface Title {
  title: string
  lineColor: string
}

// todo: Как получать цвета из темы?
const titles: {
  [key: string]: Title ////[K in Links]: Title
} = {
  income: {
    title: 'Доход',
    lineColor: '#2b2727'
  },
  expense: {
    title: 'Расход',
    lineColor: '#f83'
  }
}

type Params = { type: Links }

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName] // o[propertyName] is of type T[K]
}

export const List: FC<RouteComponentProps<Params>> = ({ match }) => {
  const { type } = match.params
  // todo: сделай проверку на 404
  const title = useMemo(() => getProperty(titles, type), [type])

  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
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

import React, { FC, useMemo, useState, useEffect } from 'react'
import { ContentHeader } from 'components/ContentHeader'
import { SelectInput } from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import { HistoryFinanceCard } from 'components/HistoryFinanceCard'
import { RouteComponentProps } from 'react-router-dom'
import { getProperty } from 'utils/helpers'
import gains from 'repositories/gains'
import expenses from 'repositories/expenses'

type Links = 'income' | 'expense'
type MatchParams = { type: Links }
interface Data {
  description: string
  amount: string
  type: string
  frequency: string
  date: string
}

interface TransformatedData {
  id: number
  description: string
  amountFormatted: string
  frequency: string
  dataFormatted: string
  tagColor: string
}

interface Title {
  title: string
  lineColor: string
  data: Data[]
}

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

// todo: Как получать цвета из темы?
const titles: {
  [key: string]: Title // [K in Links]: Title
} = {
  income: {
    title: 'Доход',
    lineColor: '#2b2727',
    data: gains
  },
  expense: {
    title: 'Расход',
    lineColor: '#f83',
    data: expenses
  }
}

// todo: сделай проверку на 404
export const List: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [data, setData] = useState<TransformatedData[]>([])

  const { type } = match.params
  const page = useMemo(() => getProperty(titles, type), [type])

  useEffect(() => {
    const responses = page.data.map<TransformatedData>((item, idx) => ({
      id: idx,
      description: item.description,
      amountFormatted: item.amount,
      frequency: item.frequency,
      dataFormatted: item.date,
      tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
    }))

    setData(responses)
  }, [page.data])

  return (
    <Container>
      <ContentHeader title={page.title} lineColor={page.lineColor}>
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

      <Content>
        {data.map(item => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dataFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  )
}

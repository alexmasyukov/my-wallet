import React, { FC } from 'react'
import { Container } from './styles'

interface SelectInputProps {
  options: ReadonlyArray<{
    value: string | number
    label: string | number
  }>
}

export const SelectInput: FC<SelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </Container>
  )
}

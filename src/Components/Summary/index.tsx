import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryContainer, SummaryCard } from './styles'
export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f05a68" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>{' '}
      <SummaryCard variant="green">
        <header>
          <span>Saldo</span>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

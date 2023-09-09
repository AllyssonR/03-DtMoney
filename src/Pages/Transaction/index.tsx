import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
export function Transactions() {
  interface TransactionsProps {
    id: number
    description: string
    type: 'income' | 'outcome'
    category: string
    price: number
    createdAt: string
  }
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  async function loadTransctions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransctions()
  }, [])
  console.log(transactions)
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

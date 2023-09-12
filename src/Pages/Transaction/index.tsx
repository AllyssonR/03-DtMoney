import { useContext } from 'react'
import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
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
                      R${transaction.price}
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

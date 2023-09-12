import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './Pages/Transaction'
import { TransactionContextProvider } from './Contexts/TransactionsContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionContextProvider>
        <GlobalStyle />
        <Transactions />
      </TransactionContextProvider>
    </ThemeProvider>
  )
}

import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
interface TransactionContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
}
interface TransacionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({
  children,
}: TransacionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])
  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions')
    if (query) {
      url.searchParams.append('q', query)
    }
    const response = await fetch(url) // lembra de colocar o response no lugar certo depois da condição de pesquisa
    const data = await response.json()
    console.log(url)
    console.log(data)

    setTransactions(data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

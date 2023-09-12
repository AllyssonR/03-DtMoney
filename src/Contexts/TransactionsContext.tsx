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
}
interface TransacionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({
  children,
}: TransacionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])
  async function loadTransctions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransctions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

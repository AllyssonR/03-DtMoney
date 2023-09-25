import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
/*
Por que um componente renderiza?
- Hooks changed (mudou estado,contexto,reduver)
- Props chaged (mudou propriedade)
- Parent rerendered (compoenente pai renderizou)


Qual o fluxo de renderização
1- O react recria HTML da interace da aquele componente
2- Compara a versao do HTML recriada com a versão anterior
3- SE mudou alguma coisa, ele reeescreve o HTML na tela
*/

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}
interface TransacionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({
  children,
}: TransacionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])
  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data
      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])
  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

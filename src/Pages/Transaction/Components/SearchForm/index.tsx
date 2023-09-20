import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { TransactionsContext } from '../../../../Contexts/TransactionsContext'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
const searchFormSchema = z.object({
  query: z.string(),
})
type SearchformInputs = z.infer<typeof searchFormSchema>
export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchformInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchTransactions(data: SearchformInputs) {
    console.log(data)
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />{' '}
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

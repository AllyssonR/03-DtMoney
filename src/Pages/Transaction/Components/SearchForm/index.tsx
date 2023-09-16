import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const searchFormSchema = z.object({
  query: z.string(),
})
type SearchformInputs = z.infer<typeof searchFormSchema>
export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchformInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  function handleSearchTransactions(data: SearchformInputs) {
    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />{' '}
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchFormContainer } from './styles'
export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" name="" id="" />{' '}
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

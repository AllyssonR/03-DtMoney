import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchFormContainer } from './styles'
export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" name="" id="" />{' '}
      <button type="submit">
        <MagnifyingGlass size={32} color="#00B37E" />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

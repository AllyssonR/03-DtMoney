import { HeaderContainer, HeaderContent, NewTrasactionButton } from './style'
import logoImg from '../../assets/ignite-logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTrasactionButton>Nova Transação</NewTrasactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

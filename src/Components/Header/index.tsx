import { HeaderContainer, HeaderContent, NewTrasactionButton } from './style'
import logoImg from '../../assets/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransacionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasactionButton>Nova Transação</NewTrasactionButton>
          </Dialog.Trigger>
          <NewTransacionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

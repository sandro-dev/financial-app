import { Button, Container, Content } from "./styles"

import logoImg from '../../assets/logo-financialapp.svg'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dtMoney" />
        <Button>
          Nova transação
        </Button>
      </Content>
    </Container>
  )
}
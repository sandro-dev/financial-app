import { Button, Container, Content } from "./styles"

import logoImg from '../../assets/logo.svg'

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
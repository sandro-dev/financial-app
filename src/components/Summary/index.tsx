import { Box, Container, Content } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary: React.FC = () => {
  return (
    <Container>
      <Content>
        <Box>
          <header>
            <span>Entradas</span>
            <img src={incomeImg} alt="entradas" />
          </header>          
            <strong>R$ 15.500,00</strong>
        </Box>
        <Box>
          <header>
            <span>Saídas</span>
            <img src={outcomeImg} alt="saídas" />
          </header>          
            <strong>R$ 4.360,00</strong>
        </Box>
        <Box>
          <header>
            <span>Total</span>
            <img src={totalImg} alt="total" />
          </header>          
            <strong>R$ 11.140,00</strong>
        </Box>
      </Content>
    </Container>
  );
}
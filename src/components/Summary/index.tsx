import { Box, Container, Content } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary: React.FC = () => {

  const { transactionsData } = useTransactions();

  //const totalIncome = transactionsData.reduce((acc, transaction) => transaction.type === 'credit' ? acc += transaction.price : acc, 0)
  const totalIncome = transactionsData.reduce((acc, transaction) => {
    if(transaction.type === 'credit') {
      return acc += transaction.price;
    }

    return acc;
  }, 0);

 // const totalOutcome = transactionsData.reduce((acc, transaction) => transaction.type === 'debit' ? acc -= transaction.price : acc, 0);
  const totalOutcome = transactionsData.reduce((acc, transaction) => {
    if(transaction.type === 'debit') {
      return acc -= transaction.price;
    }

    return acc;
  }, 0);

  const total = totalIncome - totalOutcome;
  
  console.log('total income => ', totalIncome)
  console.log('total outcome => ', totalOutcome)
  console.log('total => ', total);

  return (
    <Container>
      <Content>
        <Box>
          <header>
            <span>Entradas</span>
            <img src={incomeImg} alt="entradas" />
          </header>          
            <strong>
              {
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalIncome)
              }
            </strong>
        </Box>
        <Box>
          <header>
            <span>Saídas</span>
            <img src={outcomeImg} alt="saídas" />
          </header>          
            <strong>
              {
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                        .format(totalOutcome)
              }
            </strong>
        </Box>
        <Box>
          <header>
            <span>Total</span>
            <img src={totalImg} alt="total" />
          </header>          
            <strong>
              {
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                        .format(total)
              }
            </strong>
        </Box>
      </Content>
    </Container>
  );
}
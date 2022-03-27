import { useTransactions } from "../../hooks/useTransactions"
import { Container, Content } from "./style"

export const TransactionsTable: React.FC = () => {

  const { transactionsData } = useTransactions();

  return (
    <Container>
      <Content>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactionsData.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.name}</td>
                <td className={transaction.type}>
                  { 
                    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(transaction.price)
                  }
                  </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short'}).format(transaction.date)
                  }
                </td>
              </tr>
            ))
          }
          

        </tbody>
      </table>
      </Content>
    </Container>
  )
}
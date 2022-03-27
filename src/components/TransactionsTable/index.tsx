import { Container, Content } from "./style"

export const TransactionsTable: React.FC = () => {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="credit">R$18000</td>
            <td>Venda</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel do AP</td>
            <td className="debit">- R$1200</td>
            <td>Despesa</td>
            <td>21/02/2022</td>
          </tr>
          <tr>
            <td>Barca de Sushi</td>
            <td className="debit">- R$200</td>
            <td>Comida</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td>iPhone 11</td>
            <td className="credit">R$3000</td>
            <td>Venda</td>
            <td>23/02/2022</td>
          </tr>
        </tbody>
      </table>
      </Content>
    </Container>
  )
}
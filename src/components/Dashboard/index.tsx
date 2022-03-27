import { Header } from "../Header";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (    
    <>
      <TransactionsProvider>
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal />
      </TransactionsProvider>
    </>
  )
}


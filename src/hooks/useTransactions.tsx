import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

export interface ITransactionsDTO {
  id: string,
  name: string;
  price: number;
  type: string;
  category: string;
  date: Date;
}

interface TransactionsContextData {
  transactionsData: ITransactionsDTO[];
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

const TransactionsProvider: React.FC = ({children}) => {

  const transactionsData = [
    {
      id: uuid(),
      name: 'Compra de MacBook Pro',
      price: -6000,
      type: 'debit',
      category: 'Compras',
      date: new Date(),
    },
    {
      id: uuid(),
      name: 'Venda de iPhone 13',
      price: 12000,
      type: 'credit',
      category: 'Venda',
      date: new Date(),
    },
    {
      id: uuid(),
      name: 'Compra de Imac Pro',
      price: -8000,
      type: 'debit',
      category: 'Compras',
      date: new Date(),
    },
    {
      id: uuid(),
      name: 'Venda de iPhone 12 Pro',
      price: 9000,
      type: 'credit',
      category: 'Venda',
      date: new Date(),
    },

  ];

  return (
    <TransactionsContext.Provider value={{transactionsData}}>
      {children}
    </TransactionsContext.Provider>
  )

}

function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}

export { TransactionsProvider, useTransactions }
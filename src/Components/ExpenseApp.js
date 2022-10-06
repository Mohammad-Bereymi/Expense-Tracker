import { useState } from "react";
import OverViewCompoent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
    console.log(formValues);
  };
  return (
    <section className="container">
      <OverViewCompoent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

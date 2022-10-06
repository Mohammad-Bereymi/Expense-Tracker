import { useState } from "react";

const TrasnActionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    desc: "",
    amount: 0,
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        value={formValues.desc}
        placeholder="description"
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        placeholder="amount"
        onChange={changeHandler}
      />
      <div>
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type == "expense"}
        />
        <label>Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          onChange={changeHandler}
          checked={formValues.type == "income"}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TrasnActionForm;

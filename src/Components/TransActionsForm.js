import { useState } from "react";

const TrasnActionForm = ({ addTransaction, setIsShow }) => {
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
    setIsShow(false);
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
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type == "expense"}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          id="income"
          onChange={changeHandler}
          checked={formValues.type == "income"}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TrasnActionForm;

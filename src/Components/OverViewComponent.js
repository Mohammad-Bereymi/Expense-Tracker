import { useState } from "react";
import TrasnActionForm from "./TransActionsForm";

const OverViewCompoent = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance:{expense - income} $</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TrasnActionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default OverViewCompoent;

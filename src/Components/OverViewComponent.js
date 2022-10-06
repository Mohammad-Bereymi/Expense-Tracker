import { useState } from "react";
import TrasnActionForm from "./TransActionsForm";

const OverViewCompoent = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance:{income - expense} $</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow ? "cancel" : "Add"}`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TrasnActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          Income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewCompoent;

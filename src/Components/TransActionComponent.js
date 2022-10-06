import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState([]);
  const filteredTransaction = (search) => {
    if (!search || search == "") {
      setFilteredTnx(transactions);
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransaction(e.target.value);
  };
  useEffect(() => {
    filteredTransaction(searchItem);
  }, [transactions]);
  if (!transactions.length)
    return <h4 style={{ marginTop: "12px" }}>add some transaction !</h4>;
  return (
    <section>
      <input
        type="text"
        onChange={changeHandler}
        value={searchItem}
        className="search"
        placeholder="search for tnx..."
      />
      {filteredTnx.length ? (
        filteredTnx.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type === "expense" && "4px solid red" }}
          >
            <span>{t.desc}</span>
            <span>{t.amount} $</span>
          </div>
        ))
      ) : (
        <h5>no item matchs !</h5>
      )}
    </section>
  );
};

export default TransActionComponent;

import "./ExpenseItems.css";
const ExpenseItems = (props) => {
  let data = props.data;
  return (
    <div>
      {Array.isArray(data)
        ? data.map((d) => (
            <div className="expense-item">
              <div className="expense-item__description">
                <h2>{d.title}</h2>
                <div className="expense-item__price">{d.amount}</div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default ExpenseItems;

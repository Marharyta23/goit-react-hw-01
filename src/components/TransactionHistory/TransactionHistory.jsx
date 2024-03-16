import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <>
      <h2 className={css.title}>Task 3</h2>
      <table className={css.table}>
        <thead className={css.heading}>
          <tr>
            <th className={css.item}>Type</th>
            <th className={css.item}>Amount</th>
            <th className={css.item}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id} className={css.background}>
                <td className={css.item}>{item.type}</td>
                <td className={css.item}>{item.amount}</td>
                <td className={css.item}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

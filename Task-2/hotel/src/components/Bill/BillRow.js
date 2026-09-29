import styles from "./BillRow.module.css";

const BillRow = (props) => {
    return (
        <div className={styles.billRow}>
            <span>{props.name}</span>
            <span>₹{props.price}</span>
            <span>{props.count}</span>
            <span>{props.nights}</span>
            <span className={styles.roomAmount}>₹{props.amount}</span>
        </div>
    );
};

export default BillRow;

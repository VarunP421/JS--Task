import styles from "./BillRow.module.css";

const BillRow = (props) => {
    return (
        <div className={styles.billRow}>
            <span>{props.name}</span>
            <span id={`${props.type}PriceDisplay`}>{props.amount}</span>
            <span id={`${props.type}Count`}>-</span>
            <span id={`${props.type}Nights`}>-</span>
            <span id={`${props.type}Amount`}>₹0</span>
        </div>
    );
};

export default BillRow;

import styles from './Bill.module.css'
const BillHeader = () => {
    return (
        <div className={styles.billHeader}>
            <span>Room</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Nights</span>
            <span>Amount</span>
        </div>
    );
};

export default BillHeader;

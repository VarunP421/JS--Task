import styles from "./Bill.module.css";

const BillSummary = ({data}) => {
    return (
        <>
            <hr />

            <div className={styles.billRow}>
                <span>Room Charges</span>
                <span></span>
                <span></span>
                <span></span>
                <span>₹{data.roomCharges}</span>
            </div>

            {data.discount > 0 && (
                <div className={styles.billRow}>
                    <span>Discount</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={styles.discount}>- ₹{data.discount}</span>
                </div>
            )}

            {data.serviceCharge && (
                <div className={styles.billRow}>
                    <span>Service Charge</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={styles.serviceCharge}>+ ₹500.00</span>
                </div>
            )}

            <div className={styles.billRow}>
                <span>GST</span>
                <span></span>
                <span></span>
                <span></span>
                <span>+ ₹{data.gstAmt}</span>
            </div>

            <div className={styles.billTotal}>
                <span>Total Amount</span>
                <span>₹{data.totalBill}</span>
            </div>
        </>
    );
};

export default BillSummary;

const BillSummary = (props) => {
    return (
        <>
            <hr />

            <div className={`${styles.billRow} ${styles.summaryRow}`}>
                <span>Room Charges</span>
                <span></span>
                <span></span>
                <span></span>
                <span className={styles.summaryAmount}>
                    ₹{props.data.roomCharges}
                </span>
            </div>

            {props.data.discount > 0 && (
                <div className={`${styles.billRow} ${styles.discountRow}`}>
                    <span>Discount</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={styles.discountAmount}>
                        -₹{props.data.discount}
                    </span>
                </div>
            )}

            {props.data.serviceCharge && (
                <div className={`${styles.billRow} ${styles.serviceChargeRow}`}>
                    <span>Service Charge</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={styles.serviceChargeAmount}>+₹500</span>
                </div>
            )}

            <div className={`${styles.billRow} ${styles.gstRow}`}>
                <span>GST</span>
                <span></span>
                <span></span>
                <span></span>
                <span className={styles.gstAmount}>₹{props.data.gstAmt}</span>
            </div>

            <div className={styles.billTotal}>
                <span>Total Amount</span>
                <span>₹{props.data.totalBill}</span>
            </div>
        </>
    );
};

export default BillSummary;

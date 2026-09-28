import styles from "./Bill.module.css";

const Bill = () => {
    return (
        <div id="bill" className={styles.billCard}>

            <h2>Bill Summary</h2>

            <div className={styles.billHeader}>
                <span>Room</span>
                <span>Price</span>
                <span>Qty</span>
                <span>Nights</span>
                <span>Amount</span>
            </div>

            <div className={styles.billRow}>
                <span>Standard</span>
                <span id="stdPriceDisplay">₹2,000</span>
                <span id="standardCount">-</span>
                <span id="standardNights">-</span>
                <span id="standardAmount">₹0</span> 
            </div>

            <div className={styles.billRow}>
                <span>Deluxe</span>
                <span id="delPriceDisplay">₹3,500</span>
                <span id="deluxeCount">-</span>
                <span id="deluxeNights">-</span>
                <span id="deluxeAmount">₹0</span>
            </div>

            <div className={styles.billRow}>
                <span>Suite</span>
                <span id="suitePriceDisplay">₹6,000</span>
                <span id="suiteCount">-</span>
                <span id="suiteNights">-</span>
                <span id="suiteAmount">₹0</span>
            </div>

            <hr />

            <div className={styles.billRow}>
                <span>Room Charges</span>
                <span></span>
                <span></span>
                <span></span>
                <span id="roomCharges">₹0</span>
            </div>

            <div
                className={styles.billRow}
                id="discountRow"
                style={{ display: "none" }}
            >
                <span>Discount</span>
                <span></span>
                <span></span>
                <span></span>
                <span id="discount">₹0</span>
            </div>

            <div
                className={`${styles.billRow} ${styles.serviceChargeRow}`}
                id="serviceChargeRow"
                style={{ display: "none" }}
            >
                <span>Service Charge</span>
                <span></span>
                <span></span>
                <span></span>
                <span
                    id="serviceCharge"
                    className={styles.serviceCharge}
                >
                    ₹0
                </span>
            </div>

            <div className={styles.billRow}>
                <span>GST</span>
                <span></span>
                <span></span>
                <span></span>
                <span id="gst">₹0</span>
            </div>

            <div className={styles.billTotal}>
                <span>Total Amount</span>
                <span id="totalAmount">₹0</span>
            </div>

        </div>
    );
};

export default Bill;

import styles from "./Bill.module.css";

const Bill = (props) => {
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

            {props.data.stdRoomAmount > 0 && (
                <div className={styles.billRow}>
                    <span>Standard</span>
                    <span id="stdPriceDisplay">₹2,000</span>
                    <span id="standardCount">{props.data.stdRoomCount}</span>
                    <span id="standardNights">{props.data.nights}</span>
                    <span id="standardAmount">₹{props.data.stdRoomAmount}</span>
                </div>
            )}

            {props.data.delRoomAmount > 0 && (
                <div className={styles.billRow}>
                    <span>Deluxe</span>
                    <span id="delPriceDisplay">₹3,500</span>
                    <span id="deluxeCount">{props.data.delRoomCount}</span>
                    <span id="deluxeNights">{props.data.nights}</span>
                    <span id="deluxeAmount">₹{props.data.delRoomAmount}</span>
                </div>
            )}

            {props.data.suiteRoomAmount > 0 && (
                <div className={styles.billRow}>
                    <span>Suite</span>
                    <span id="suitePriceDisplay">₹6,000</span>
                    <span id="suiteCount">{props.data.suiteRoomCount}</span>
                    <span id="suiteNights">{props.data.nights}</span>
                    <span id="suiteAmount">₹{props.data.suiteRoomAmount}</span>
                </div>
            )}

            <hr />

            <div className={styles.billRow}>
                <span>Room Charges</span>
                <span></span>
                <span></span>
                <span></span>
                <span id="roomCharges">₹{props.data.roomCharges}</span>
            </div>

            {props.data.discount > 0 && (
                <div className={styles.billRow} id="discountRow">
                    <span>Discount</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span id="discount">₹{props.data.discount}</span>
                </div>
            )}

            {props.data.serviceCharge && (
                <div
                    className={`${styles.billRow} ${styles.serviceChargeRow}`}
                    id="serviceChargeRow"
                >
                    <span>Service Charge</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span id="serviceCharge" className={styles.serviceCharge}>
                        ₹500
                    </span>
                </div>
            )}

            <div className={styles.billRow}>
                <span>GST</span>
                <span></span>
                <span></span>
                <span></span>
                <span id="gst">₹{props.data.gstAmt}</span>
            </div>

            <div className={styles.billTotal}>
                <span>Total Amount</span>
                <span id="totalAmount">₹{props.data.totalBill}</span>
            </div>
        </div>
    );
};

export default Bill;

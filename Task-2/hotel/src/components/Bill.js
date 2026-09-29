import BillRow from "../UI/BillRow";
import styles from "./Bill.module.css";

const Bill = (props) => {
    return (
        <>
            <div id="bill" className={styles.billCard}>
                <h2>Bill Summary</h2>

                {props.data.flag && (
                    <>
                        <div className={styles.billHeader}>
                            <span>Room</span>
                            <span>Price</span>
                            <span>Qty</span>
                            <span>Nights</span>
                            <span>Amount</span>
                        </div>

                        {props.data.stdRoomAmount > 0 && (
                            <BillRow
                                name="Standard"
                                price={props.data.stdRoomPrice}
                                count={props.data.stdRoomCount}
                                nights={props.data.nights}
                                amount={props.data.stdRoomAmount}
                            />
                        )}

                        {props.data.delRoomAmount > 0 && (
                            <BillRow
                                name="Deluxe"
                                price={props.data.delRoomPrice}
                                count={props.data.delRoomCount}
                                nights={props.data.nights}
                                amount={props.data.delRoomAmount}
                            />
                        )}

                        {props.data.suiteRoomAmount > 0 && (
                            <BillRow
                                name="Suite"
                                price={props.data.suiteRoomPrice}
                                count={props.data.suiteRoomCount}
                                nights={props.data.nights}
                                amount={props.data.suiteRoomAmount}
                            />
                        )}

                        <hr />

                        <div
                            className={`${styles.billRow} ${styles.summaryRow}`}
                        >
                            <span>Room Charges</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className={styles.summaryAmount}>
                                ₹{props.data.roomCharges}
                            </span>
                        </div>

                        {props.data.discount > 0 && (
                            <div
                                className={`${styles.billRow} ${styles.discountRow}`}
                            >
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
                            <div
                                className={`${styles.billRow} ${styles.serviceChargeRow}`}
                            >
                                <span>Service Charge</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className={styles.serviceChargeAmount}>
                                    +₹500
                                </span>
                            </div>
                        )}

                        <div className={`${styles.billRow} ${styles.gstRow}`}>
                            <span>GST</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className={styles.gstAmount}>
                                ₹{props.data.gstAmt}
                            </span>
                        </div>

                        <div className={styles.billTotal}>
                            <span>Total Amount</span>
                            <span>₹{props.data.totalBill}</span>
                        </div>
                    </>
                )}
                {!props.data.flag && <p>Nothing to show yet</p>}
            </div>
        </>
    );
};

export default Bill;

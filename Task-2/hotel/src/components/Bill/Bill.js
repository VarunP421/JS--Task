import BillRow from "./BillRow";
import styles from "./Bill.module.css";

const Bill = (props) => {
    const { data } = props;

    return (
        <div id="bill" className={styles.billCard}>
            <h2>Bill Summary</h2>

            {!data.flag ? (
                /* =========================
                   EMPTY STATE
                ========================= */
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon} aria-hidden="true">
                        <span>₹</span>
                    </div>

                    <h3>No bill summary yet</h3>

                    <p>
                        Your bill summary will appear here once the bill
                        details are available.
                    </p>
                </div>
            ) : (
                /* =========================
                   BILL CONTENT
                ========================= */
                <>
                    <div className={styles.billHeader}>
                        <span>Room</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Nights</span>
                        <span>Amount</span>
                    </div>

                    {data.stdRoomAmount > 0 && (
                        <BillRow
                            name="Standard"
                            price={data.stdRoomPrice}
                            count={data.stdRoomCount}
                            nights={data.nights}
                            amount={data.stdRoomAmount}
                        />
                    )}

                    {data.delRoomAmount > 0 && (
                        <BillRow
                            name="Deluxe"
                            price={data.delRoomPrice}
                            count={data.delRoomCount}
                            nights={data.nights}
                            amount={data.delRoomAmount}
                        />
                    )}

                    {data.suiteRoomAmount > 0 && (
                        <BillRow
                            name="Suite"
                            price={data.suiteRoomPrice}
                            count={data.suiteRoomCount}
                            nights={data.nights}
                            amount={data.suiteRoomAmount}
                        />
                    )}

                    <hr />

                    {/* Room Charges */}
                    <div className={styles.billRow}>
                        <span>Room Charges</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>₹{data.roomCharges}</span>
                    </div>

                    {/* Discount */}
                    {data.discount > 0 && (
                        <div className={styles.billRow}>
                            <span>Discount</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className={styles.discount}>
                                - ₹{data.discount}
                            </span>
                        </div>
                    )}

                    {/* Service Charge */}
                    {data.serviceCharge && (
                        <div className={styles.billRow}>
                            <span>Service Charge</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className={styles.serviceCharge}>
                                + ₹500.00
                            </span>
                        </div>
                    )}

                    {/* GST */}
                    <div className={styles.billRow}>
                        <span>GST</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>+ ₹{data.gstAmt}</span>
                    </div>

                    {/* Total */}
                    <div className={styles.billTotal}>
                        <span>Total Amount</span>
                        <span>₹{data.totalBill}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Bill;

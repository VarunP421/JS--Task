import BillRow from "./BillRow";
import styles from "./Bill.module.css";
import BillSummary from "./BillSummary";

const Bill = (props) => {
    const { data } = props;

    return (
        <div id="bill" className={styles.billCard}>
            <h2>Bill Summary</h2>

            {!data.flag ? (
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

                    <BillSummary data={props.data}/>
                </>
            )}
        </div>
    );
};

export default Bill;

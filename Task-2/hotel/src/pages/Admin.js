import { useNavigate } from "react-router";
import Header from "../components/Header";
import classes from "./Admin.module.css";

export default function AdminPage() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.adminCard}>
                    <h1>Hotel Admin Panel</h1>
                    <p className={classes.subtitle}>
                        Manage room count and pricing
                    </p>

                    <form id="admForm">
                        <div className={classes.roomCard}>
                            <h2>Standard Room</h2>

                            <div className={classes.formRow}>
                                <div className={classes.formGroup}>
                                    <label htmlFor="standardCount">
                                        Room Count
                                    </label>
                                    <input
                                        type="number"
                                        id="standardCount"
                                        min="0"
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="standardPrice">
                                        Price Per Night (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="standardPrice"
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.roomCard}>
                            <h2>Deluxe Room</h2>

                            <div className={classes.formRow}>
                                <div className={classes.formGroup}>
                                    <label htmlFor="deluxeCount">
                                        Room Count
                                    </label>
                                    <input
                                        type="number"
                                        id="deluxeCount"
                                        min="0"
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="deluxePrice">
                                        Price Per Night (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="deluxePrice"
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.roomCard}>
                            <h2>Suite Room</h2>

                            <div className={classes.formRow}>
                                <div className={classes.formGroup}>
                                    <label htmlFor="suiteCount">
                                        Room Count
                                    </label>
                                    <input
                                        type="number"
                                        id="suiteCount"
                                        min="0"
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="suitePrice">
                                        Price Per Night (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="suitePrice"
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.buttonGroup}>
                            <button type="submit" className={classes.saveBtn}>
                                Save Changes
                            </button>

                            <button
                                type="button"
                                className={classes.backBtn}
                                onClick={() => navigate("/")}
                            >
                                Back to Billing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

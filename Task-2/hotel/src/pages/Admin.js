import { useNavigate } from "react-router";
import Header from "../components/Header";
import classes from "./Admin.module.css";
import { useContext, useRef } from "react";
import { RoomDataCtx } from "../context/DataContext";

export default function AdminPage() {
    const navigate = useNavigate();
    const {roomData, updateRoomConfig } = useContext(RoomDataCtx);
    const prevVal = useRef(roomData)
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            standardRoomAvailable: formData.get('stdRoomAvailable'),
            deluxeRoomAvailable: formData.get('delRoomAvailable'),
            suiteRoomAvailable: formData.get('suiteRoomAvailable'),
            standardRoomPrice: formData.get('stdRoomPrice'),
            deluxeRoomPrice: formData.get('delRoomPrice'),
            suiteRoomPrice: formData.get('suiteRoomPrice'),
        };
        updateRoomConfig(data);
        navigate('/')
    };

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.adminCard}>
                    <h1>Hotel Admin Panel</h1>
                    <p className={classes.subtitle}>
                        Manage room count and pricing
                    </p>

                    <form id="admForm" onSubmit={submitHandler}>
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
                                        name="stdRoomAvailable"
                                        defaultValue={prevVal.current.standardRoomAvailable}
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
                                        name="stdRoomPrice"
                                        defaultValue={prevVal.current.standardRoomPrice}
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
                                        name="delRoomAvailable"
                                        defaultValue={prevVal.current.deluxeRoomAvailable}
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
                                        name="delRoomPrice"
                                        defaultValue={prevVal.current.deluxeRoomPrice}
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
                                        name="suiteRoomAvailable"
                                        defaultValue={prevVal.current.suiteRoomAvailable}
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
                                        name="suiteRoomPrice"
                                        defaultValue={prevVal.current.suiteRoomPrice}
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

import Input from "../../UI/Input/Input";
import classes from "./AdminForm.module.css";
import { useNavigate } from "react-router";

export default function AdminForm({ prevVal, onSubmit }) {
    const navigate = useNavigate();
    return (
        <div className={classes.container}>
            <div className={classes.adminCard}>
                <h1>Hotel Admin Panel</h1>
                <p className={classes.subtitle}>
                    Manage room count and pricing
                </p>

                <form id="admForm" onSubmit={onSubmit}>
                    <div className={classes.roomCard}>
                        <h2>Standard Room</h2>

                        <div className={classes.formRow}>
                            <Input
                                name="stdRoomAvailable"
                                min="0"
                                type="number"
                                defaultValue={
                                    prevVal.current.standardRoomAvailable
                                }
                                label="Room Count"
                            />
                            <Input
                                name="stdRoomPrice"
                                min="0"
                                type="number"
                                defaultValue={prevVal.current.standardRoomPrice}
                                label="Price Per Night (₹)"
                            />
                        </div>
                    </div>

                    <div className={classes.roomCard}>
                        <h2>Deluxe Room</h2>

                        <div className={classes.formRow}>
                            <Input
                                name="delRoomAvailable"
                                min="0"
                                type="number"
                                defaultValue={
                                    prevVal.current.deluxeRoomAvailable
                                }
                                label="Room Count"
                            />
                            <Input
                                name="delRoomPrice"
                                min="0"
                                type="number"
                                defaultValue={prevVal.current.deluxeRoomPrice}
                                label="Price Per Night (₹)"
                            />
                        </div>
                    </div>

                    <div className={classes.roomCard}>
                        <h2>Suite Room</h2>

                        <div className={classes.formRow}>
                            <Input
                                name="suiteRoomAvailable"
                                min="0"
                                type="number"
                                defaultValue={
                                    prevVal.current.suiteRoomAvailable
                                }
                                label="Room Count"
                            />
                            <Input
                                name="suiteRoomPrice"
                                min="0"
                                type="number"
                                defaultValue={prevVal.current.suiteRoomPrice}
                                label="Price Per Night (₹)"
                            />
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
    );
}

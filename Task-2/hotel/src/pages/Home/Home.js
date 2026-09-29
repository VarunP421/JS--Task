import { useContext, useState } from "react";
import Bill from "../../components/Bill/Bill";
import BookingForm from "../../components/BookingForm/BookingForm";
import Header from "../../components/Header/Header";
import classes from "./Home.module.css";
import validateBooking from "../../utility/Validation";
import { RoomDataCtx } from "../../context/DataContext";
import billCalculate from "../../utility/billCalculator";

export default function HomePage() {
    const { roomData, updateRoomAvailability } = useContext(RoomDataCtx);

    const [billData, setBillData] = useState({
        stdRoomCount: 0,
        delRoomCount: 0,
        suiteRoomCount: 0,
        stdRoomAmount: 0,
        delRoomAmount: 0,
        suiteRoomAmount: 0,
        roomCharges: 0,
        discount: 0,
        serviceCharge: false,
        gstAmt: 0,
        totalBill: 0,
        nights: 0,
        flag:false
    });

    const submitFormHandler = (data) => {
        try {
            validateBooking(data, roomData);
        } catch (e) {
            alert(e.message);
            return;
        }

        const stdRoomCnt = Number(data.standardRoomCount);
        const delRoomCnt = Number(data.deluxeRoomCount);
        const suiteRoomCnt = Number(data.suiteRoomCount);
        const nights = Number(data.noOfNights);

        const finalVal = billCalculate(
            stdRoomCnt,
            delRoomCnt,
            suiteRoomCnt,
            nights,
            roomData,
        );

        setBillData({
            stdRoomCount: stdRoomCnt,
            delRoomCount: delRoomCnt,
            suiteRoomCount: suiteRoomCnt,
            stdRoomAmount: finalVal.stdRoomAmt,
            delRoomAmount: finalVal.delRoomAmt,
            suiteRoomAmount: finalVal.suiteRoomAmt,
            roomCharges: finalVal.roomCharges,
            discount: finalVal.discount,
            serviceCharge: finalVal.serviceCharge,
            gstAmt: finalVal.gstAmt,
            totalBill: finalVal.totalBill,
            nights: nights,
            stdRoomPrice:roomData.standardRoomPrice,
            delRoomPrice:roomData.deluxeRoomPrice,
            suiteRoomPrice:roomData.suiteRoomPrice,
            flag:true
        });

        updateRoomAvailability(
            finalVal.newStdAvailable,
            finalVal.newDelAvailable,
            finalVal.newSuiteAvailable,
        );
    };
    return (
        <>
            <Header />
            <div className={classes.container}>
                <BookingForm onSubmit={submitFormHandler} />
                <Bill data={billData} />
            </div>
        </>
    );
}

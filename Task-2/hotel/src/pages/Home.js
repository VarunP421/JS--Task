import { useState } from "react";
import Bill from "../components/Bill";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import classes from "./Home.module.css";

export default function HomePage() {
    const [roomData, setRoomData] = useState({
        standardRoomAvailable: 15,
        deluxeRoomAvailable: 15,
        suiteRoomAvailable: 15,
        standardRoomPrice: 2000,
        deluxeRoomPrice: 3500,
        suiteRoomPrice: 6000,
    });

    const [billData, setBillData] = useState({
        stdRoomCount:0,
        delRoomCount:0,
        suiteRoomCount:0,
        stdRoomAmount:0,
        delRoomAmount:0,
        suiteRoomAmount:0,
        roomCharges: 0,
        discount: 0,
        serviceCharge: false,
        gstAmt: 0,
        totalBill: 0,
        nights:0
    });

    const submitFormHandler = (data) => {
        const stdRoomCnt = Number(data.standardRoomCount);
        const delRoomCnt = Number(data.deluxeRoomCount);
        const suiteRoomCnt = Number(data.suiteRoomCount);

        const nights = Number(data.noOfNights);

        if (stdRoomCnt > roomData.standardRoomAvailable) {
            alert(
                `Only ${roomData.standardRoomAvailable} Standard rooms are available.`,
            );
            return;
        }
        if (delRoomCnt > roomData.deluxeRoomAvailable) {
            alert(
                `Only ${roomData.deluxeRoomAvailable} Deluxe rooms are available.`,
            );
            return;
        }
        if (suiteRoomCnt > roomData.suiteRoomAvailable) {
            alert(
                `Only ${roomData.suiteRoomAvailable} Suite rooms are available.`,
            );
            return;
        }
        if (stdRoomCnt === 0 && delRoomCnt === 0 && suiteRoomCnt === 0) {
            alert("Please select at least one room.");
            return;
        }
        if (stdRoomCnt < 0 || delRoomCnt < 0 || suiteRoomCnt < 0) {
            alert("Room count cannot be negative.");
            return;
        }
        if (nights < 1) {
            alert("Number of nights must be at least 1.");
            return;
        }

        let totalBill = 0;

        const stdRoomAmt = stdRoomCnt * roomData.standardRoomPrice * nights;
        const newStdAvailable = roomData.standardRoomAvailable - stdRoomCnt;

        const delRoomAmt = delRoomCnt * roomData.deluxeRoomPrice * nights;
        const newDelAvailable = roomData.deluxeRoomAvailable - delRoomCnt;

        const suiteRoomAmt = suiteRoomCnt * roomData.suiteRoomPrice * nights;
        const newSuiteAvailable = roomData.suiteRoomAvailable - suiteRoomCnt;

        totalBill = stdRoomAmt + delRoomAmt + suiteRoomAmt

        let roomCharges = totalBill;

        let discount = 0;
        if (totalBill > 20000) {
            discount += totalBill * 0.15;
        }

        if (nights >= 7) {
            discount += totalBill * 0.05;
        }

        totalBill -= discount;

        let serviceCharge = false;
        if (totalBill > 25000) {
            serviceCharge = true;
            totalBill += 500;
        }

        const gstAmt = totalBill * 0.18;
        totalBill += gstAmt;

        setRoomData(prev => ({
            ...prev,
            standardRoomAvailable:newStdAvailable,
            deluxeRoomAvailable:newDelAvailable,
            suiteRoomAvailable:newSuiteAvailable
        }));

        setBillData({
            stdRoomCount:stdRoomCnt,
            delRoomCount:delRoomCnt,
            suiteRoomCount:suiteRoomCnt,
            stdRoomAmount:stdRoomAmt,
            delRoomAmount:delRoomAmt,
            suiteRoomAmount:suiteRoomAmt,
            roomCharges: roomCharges,
            discount: discount,
            serviceCharge: serviceCharge,
            gstAmt: gstAmt,
            totalBill: totalBill,
            nights:nights

        });
    };
    return (
        <>
            <Header />
            <div className={classes.container}>
                <BookingForm onSubmit={submitFormHandler}/>
                <Bill data={billData} />
            </div>
        </>
    );
}



export default function billCalculate(
    stdRoomCnt,
    delRoomCnt,
    suiteRoomCnt,
    nights,
    roomData
) {
    let totalBill = 0;

    const stdRoomAmt = stdRoomCnt * roomData.standardRoomPrice * nights;
    const newStdAvailable = roomData.standardRoomAvailable - stdRoomCnt;

    const delRoomAmt = delRoomCnt * roomData.deluxeRoomPrice * nights;
    const newDelAvailable = roomData.deluxeRoomAvailable - delRoomCnt;

    const suiteRoomAmt = suiteRoomCnt * roomData.suiteRoomPrice * nights;
    const newSuiteAvailable = roomData.suiteRoomAvailable - suiteRoomCnt;

    totalBill = stdRoomAmt + delRoomAmt + suiteRoomAmt;

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

    const retunVal = {
        roomCharges:roomCharges.toFixed(2),
        discount:discount.toFixed(2),
        gstAmt:gstAmt.toFixed(2),
        serviceCharge:serviceCharge,
        totalBill:totalBill.toFixed(2),
        stdRoomAmt:stdRoomAmt,
        delRoomAmt:delRoomAmt,
        suiteRoomAmt:suiteRoomAmt,
        newStdAvailable:newStdAvailable,
        newDelAvailable:newDelAvailable,
        newSuiteAvailable:newSuiteAvailable
    }
    return retunVal
}

export default function validateBooking(data, roomData) {
    const stdRoomCnt = Number(data.standardRoomCount);
    const delRoomCnt = Number(data.deluxeRoomCount);
    const suiteRoomCnt = Number(data.suiteRoomCount);
    const nights = Number(data.noOfNights);

    if (stdRoomCnt > roomData.standardRoomAvailable) {
        throw new Error(
            `Only ${roomData.standardRoomAvailable} Standard rooms are available.`,
        );
    }
    if (delRoomCnt > roomData.deluxeRoomAvailable) {
        throw new Error(
            `Only ${roomData.deluxeRoomAvailable} Deluxe rooms are available.`,
        );
    }
    if (suiteRoomCnt > roomData.suiteRoomAvailable) {
        throw new Error(
            `Only ${roomData.suiteRoomAvailable} Suite rooms are available.`,
        );
    }
    if (stdRoomCnt === 0 && delRoomCnt === 0 && suiteRoomCnt === 0) {
        throw new Error("Please select at least one room.");
    }
    if (stdRoomCnt < 0 || delRoomCnt < 0 || suiteRoomCnt < 0) {
        throw new Error("Room count cannot be negative.");
    }
    if (nights < 1) {
        throw new Error("Number of nights must be at least 1.");
    }
}

import { createContext, useState } from "react";

const RoomDataCtx = createContext({
    roomData: {
        standardRoomAvailable: 15,
        deluxeRoomAvailable: 15,
        suiteRoomAvailable: 15,
        standardRoomPrice: 2000,
        deluxeRoomPrice: 3500,
        suiteRoomPrice: 6000,
    },
    updateRoomConfig: () => {},
    updateRoomAvailability: () => {},
});

const RoomDataContext = (props) => {
    const [roomData, setRoomData] = useState({
        standardRoomAvailable: 15,
        deluxeRoomAvailable: 15,
        suiteRoomAvailable: 15,
        standardRoomPrice: 2000,
        deluxeRoomPrice: 3500,
        suiteRoomPrice: 6000,
    });

    const updateRoomConfig = (updatedData) => {
        setRoomData((prev) => ({
            ...prev,
            ...updatedData,
        }));
    };

    const updateRoomAvailability = (
        newStdAvailable,
        newDelAvailable,
        newSuiteAvailable,
    ) => {
        setRoomData((prev) => ({
            ...prev,
            standardRoomAvailable: newStdAvailable,
            deluxeRoomAvailable: newDelAvailable,
            suiteRoomAvailable: newSuiteAvailable,
        }));
    };

    return (
        <RoomDataCtx.Provider
            value={{ roomData, updateRoomConfig, updateRoomAvailability }}
        >
            {props.children}
        </RoomDataCtx.Provider>
    );
};

export { RoomDataCtx, RoomDataContext };

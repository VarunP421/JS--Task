import { createContext, useEffect, useState } from "react";

const defaultRoomData = {
        standardRoomAvailable: 15,
        deluxeRoomAvailable: 15,
        suiteRoomAvailable: 15,
        standardRoomPrice: 2000,
        deluxeRoomPrice: 3500,
        suiteRoomPrice: 6000,
    }

const RoomDataCtx = createContext({
    roomData: defaultRoomData,
    updateRoomConfig: () => {},
    updateRoomAvailability: () => {},
});

const RoomDataContext = (props) => {
    const [roomData, setRoomData] = useState(()=>{
        const data = localStorage.getItem('roomData')
        return data ? JSON.parse(data) : defaultRoomData
    });

    useEffect(()=>{
        localStorage.setItem('roomData',JSON.stringify(roomData))
    },[roomData])

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

import { createContext } from "react";

const DataContext = createContext({
    standardRoomCount:0,
    deluxeRoomCount:0,
    suiteRoomCount:0,
    standardRoomPrice:0,
    deluxeRoomPrice:0,
    suiteRoomPrice:0
})

export default DataContext
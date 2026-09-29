import { useNavigate } from "react-router";
import { useContext, useRef } from "react";
import { RoomDataCtx } from "../../context/DataContext";
import AdminForm from "../../components/AdminForm/AdminForm";
import Header from "../../components/Header/Header";

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
            <AdminForm prevVal={prevVal} onSubmit={submitHandler}/>
        </>
    );
}

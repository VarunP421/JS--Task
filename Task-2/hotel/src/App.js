import { BrowserRouter, Route, Routes } from "react-router";
import AdminPage from "./pages/Admin/Admin";
import HomePage from "./pages/Home/Home";
import { RoomDataContext } from "./context/DataContext";

export default function App() {
    return (
        <BrowserRouter>
            <RoomDataContext>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </RoomDataContext>
        </BrowserRouter>
    );
}

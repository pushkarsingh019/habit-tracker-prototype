import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ArchiveScreen from "./screens/ArchiveScreen";
import HabitScreen from "./screens/HabitScreen";
import Navbar from "./compomnents/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/archive" element={<ArchiveScreen />} />
                <Route path="/habit/:id" element={<HabitScreen />} />
                <Route
                    path="*"
                    element={
                        <p className="text-2xl m-8 text-red-500">
                            Oops! the page does not exist
                        </p>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

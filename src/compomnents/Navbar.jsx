import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-between mx-4 py-2">
            <div></div>
            <div className="flex gap-x-3">
                <p
                    onClick={() => navigate("/")}
                    className="text-lg font-medium text-slate-700 hover:text-sky-500"
                >
                    Habits
                </p>
                <p
                    onClick={() => navigate("/archive")}
                    className="text-lg font-medium text-slate-700 hover:text-sky-500"
                >
                    Archive
                </p>
            </div>
        </nav>
    );
};

export default Navbar;

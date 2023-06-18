import React from "react";
import { useNavigate } from "react-router-dom";

const HabitComponent = ({ name, purpose, success, date, id }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/habit/${id}`)}
            className="flex flex-col px-3 py-3 bg-gray-50 shadow-lg"
        >
            <div className="h-32 w-56 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
            <br />
            <p className="text-xl font-medium">{name}</p>
            <p>{purpose}</p>
            <p>{date}</p>
        </div>
    );
};

export default HabitComponent;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HabitDialog from "../compomnents/HabitDialog";
import { StoreContext } from "../utils/context";

const HabitScreen = () => {
    const { id } = useParams();
    const { habits } = useContext(StoreContext);
    const habitToShow = habits.find((habit) => habit.id === id);
    return (
        <section className="flex h-screen bg-gray-100 justify-center items-center">
            <div className="bg-white px-3 py-3 rounded-md">
                <h1>{habitToShow.habitName}</h1>
                <p>{habitToShow.purpose}</p>
                <p>{habitToShow.success}</p>
                <p>{habitToShow.startDate}</p>
            </div>
        </section>
    );
};

export default HabitScreen;

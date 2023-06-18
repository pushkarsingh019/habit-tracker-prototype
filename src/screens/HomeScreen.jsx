import React, { useContext, useState } from "react";
import HabitDialog from "../compomnents/HabitDialog";
import { StoreContext } from "../utils/context";
import HabitComponent from "../compomnents/HabitComponent";

const HomeScreen = () => {
    const [open, isOpen] = useState(false);
    const { habits } = useContext(StoreContext);
    if (habits.length === 0) {
        return (
            <section className="flex h-screen justify-center items-center">
                <button
                    onClick={() => isOpen(true)}
                    className=" outline-none px-3 py-2 bg-violet-600 text-white  rounded-md shadow-lg"
                >
                    Add a new habit
                </button>
                <HabitDialog
                    open={open}
                    changeDialogState={(state) => isOpen(state)}
                />
            </section>
        );
    } else {
        console.log(habits);
        return (
            <section className="px-6 py-2">
                <div className="flex justify-between">
                    <h1 className="text-3xl">Habit Tracker</h1>
                    <button
                        onClick={() => isOpen(true)}
                        className=" outline-none px-3 py-2 bg-violet-600 text-white  rounded-md shadow-lg"
                    >
                        Add a new habit
                    </button>
                </div>
                <div className="flex flex-wrap gap-x-7 gap-y-10">
                    {habits.map((habit) => {
                        return (
                            <HabitComponent
                                key={habit.id}
                                name={habit.habitName}
                                purpose={habit.purpose}
                                date={habit.startDate}
                                id={habit.id}
                            />
                        );
                    })}
                </div>
                <HabitDialog
                    open={open}
                    changeDialogState={(state) => isOpen(state)}
                />
            </section>
        );
    }
};

export default HomeScreen;

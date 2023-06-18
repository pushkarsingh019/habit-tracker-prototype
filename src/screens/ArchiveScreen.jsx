import React, { useContext } from "react";
import HabitComponent from "../compomnents/HabitComponent";
import { StoreContext } from "../utils/context";

const ArchiveScreen = () => {
    const { archive } = useContext(StoreContext);
    return (
        <section className="mx-4 my-2">
            <div className="flex flex-wrap gap-x-7 gap-y-10">
                {archive.length === 0 ? (
                    <p className="text-2xl">archive is empty...</p>
                ) : (
                    archive.map((habit) => {
                        return (
                            <HabitComponent
                                key={habit.id}
                                name={habit.habitName}
                                purpose={habit.purpose}
                                date={habit.startDate}
                                id={habit.id}
                            />
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default ArchiveScreen;

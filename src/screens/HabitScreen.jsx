import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../utils/context";

import edit from "../assets/edit.svg";
import archive from "../assets/archive.svg";
import deleteIcon from "../assets/deleteIcon.svg";

const HabitScreen = () => {
    const { id } = useParams();
    const { habits, deleteHabit, archiveHabit } = useContext(StoreContext);
    const navigate = useNavigate();
    const habitToShow = habits.find((habit) => habit.id === id);
    if (habitToShow === undefined) {
        return (
            <section className="flex h-screen justify-center items-center">
                <div className="text-center">
                    <p className="text-2xl">oops ! post not found</p>
                    <Link to={"/"} className="text-sky-600">
                        back to home
                    </Link>
                </div>
            </section>
        );
    }
    return (
        <section className="flex h-screen bg-gray-100 justify-center items-center">
            <div className="bg-white px-3 py-3 rounded-md">
                <div className=" rounded-md w-96 h-56 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <br />
                <h1 className="text-3xl font-medium">
                    {habitToShow.habitName}
                </h1>
                <br />
                <label className="text-sm text-gray-500 font-mono">Why?</label>
                <p className="text-xl font-medium mb-3">
                    {habitToShow.purpose}
                </p>
                <label className="text-sm text-gray-500 font-mono">
                    How does success look like?
                </label>
                <p className="text-xl font-medium mb-3">
                    {habitToShow.success}
                </p>
                <label className="text-sm text-gray-500 font-mono">
                    Start Date
                </label>
                <p className="text-xl font-medium mb-3">
                    {habitToShow.startDate}
                </p>
                <div className="flex justify-between">
                    <div></div>
                    <div className="flex gap-x-3">
                        <div className="bg-amber-400 px-1 py-1 rounded-md">
                            <img src={edit} alt="" />
                        </div>
                        <div
                            onClick={() => {
                                archiveHabit(id);
                                navigate("/");
                            }}
                            className="bg-sky-400 px-1 py-1 rounded-md"
                        >
                            <img src={archive} alt="" />
                        </div>
                        <div
                            onClick={() => {
                                deleteHabit(id);
                                navigate("/");
                            }}
                            className="bg-red-400 px-1 py-1 rounded-md"
                        >
                            <img src={deleteIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HabitScreen;

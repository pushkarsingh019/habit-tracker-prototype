import { Dialog } from "@headlessui/react";
import { useContext, useState } from "react";
import { StoreContext } from "../utils/context";

const HabitDialog = ({ open, changeDialogState }) => {
    const [formData, setFormData] = useState({});
    const { addNewHabit } = useContext(StoreContext);
    const createNewHabit = (event) => {
        event.preventDefault();
        addNewHabit(formData);
    };
    return (
        <Dialog
            open={open ? open : false}
            onClose={() => changeDialogState(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 shadow-xl">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white px-6 py-4 shadow-2xl border-3 border-black">
                    <Dialog.Title className="text-xl font-medium">
                        add a new habit
                    </Dialog.Title>
                    <form>
                        <input
                            type="text"
                            className="border-2"
                            placeholder="habit name"
                            value={formData.habitName ? formData.habitName : ""}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    habitName: event.target.value,
                                })
                            }
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="purpose of the habit"
                            value={formData.purpose ? formData.purpose : ""}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    purpose: event.target.value,
                                })
                            }
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="What does success look like?"
                            value={formData.success ? formData.success : ""}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    success: event.target.value,
                                })
                            }
                        />
                        <br />
                        <input
                            type="date"
                            placeholder="start date"
                            value={formData.startDate ? formData.startDate : ""}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    startDate: event.target.value,
                                })
                            }
                        />
                        <br />
                        <button
                            onClick={() => changeDialogState(false)}
                            className="text-red-600"
                        >
                            cancel
                        </button>
                        <button
                            onClick={(event) => {
                                createNewHabit(event);
                                changeDialogState(false);
                            }}
                            className="px-2 py-1 bg-green-300"
                        >
                            create habit
                        </button>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default HabitDialog;

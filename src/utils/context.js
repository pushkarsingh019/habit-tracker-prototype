import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StoreContext = createContext();

export const Context = ({children}) => {

    const [habits, setHabits] = useState([]);
    const [archive, setArchive] = useState([]);

    const store = {
        habits,
        archive,
        addNewHabit: (habit) => {
          const newHabit = {
            id: uuid(),
            ...habit,
          };
          setHabits([...habits, newHabit]);
          console.log(habits);
        },
        deleteHabit : (id) => {
          setHabits(habits.filter(habit => habit.id !== id))
        },
        archiveHabit : (id) => {
          const habitToArchive = habits.find(habit => habit.id === id);
          setArchive([...archive, habitToArchive]);
          store.deleteHabit(id);
        }
    };

    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
};
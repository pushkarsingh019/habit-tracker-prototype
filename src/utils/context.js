import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StoreContext = createContext();

export const Context = ({children}) => {

    const [habits, setHabits] = useState([]);

    const store = {
        habits,
        addNewHabit: (habit) => {
          const newHabit = {
            id: uuid(),
            ...habit,
          };
          setHabits([...habits, newHabit]);
          console.log(habits);
        },
    };

    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
};
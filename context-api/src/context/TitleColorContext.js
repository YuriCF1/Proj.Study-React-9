import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
    // State = Estado inicial definido "color: 'purple'" | dispatch = função que faz a mudança do valor | {color: "purple" = estado inicial}
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context", state);

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};

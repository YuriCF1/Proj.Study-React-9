import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //Função para mudar o estado
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  // State = Estado inicial definido "color: 'purple'" | dispatch = função que faz a mudança do valor | {color: "purple" = estado inicial}
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};

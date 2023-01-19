// 1 - Criando o contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criando provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter }} // Enviando os valores que serão lidos e os de gerenciamento
    >
      {children}
    </CounterContext.Provider>
  );
};

// 1 - Criando o contexto

import { createContext, useState } from "react";

export const CounterContext = createContext(); //A- Cria o nome do contesto 

// 2 - Criando provider
export const CounterContextProvider = ({ children }) => { //B- Cria função com children para usar a variável da creatCOntext como tag
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider //C- Cria tag com children para passar o contexto para essa children
      value={{ counter, setCounter }} // Enviando os valores que serão lidos e os de gerenciamento
    >
      {children}
    </CounterContext.Provider>
  );
};

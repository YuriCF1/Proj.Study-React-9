import React from "react";

// 3 - Alterando context
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext"; //E- Passando a função com seus valores

const ChangeCounter = () => {
  // Desestrutura o useContext com chaves, pois ele vem como objeto
  const { counter, setCounter } = useContext(CounterContext); //Se eu quisesse só alterar, o contador não interessa
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add value for counter
      </button>{" "}
      {/*Sem a ()=> a função executa com loading do componente*/}
    </div>
  );
};

export default ChangeCounter;

import React from "react";

// import { useContext } from "react"; //Usando por componente
// import { CounterContext } from "../context/CounterContext"; //Usando por componente

import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando o contador com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext); //Usando por componente
  const { counter } = useCounterContext(); //Usando por hook
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*3 - Alterando valor do context*/}
      <ChangeCounter />
    </div>
  );
};

export default Home;

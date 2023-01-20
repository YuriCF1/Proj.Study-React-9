import React from "react";

// import { useContext } from "react"; //Usando por componente
// import { CounterContext } from "../context/CounterContext"; //Usando por componente

import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando o contador com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// useTitleColorContext()
const Home = () => {
  // const { counter } = useContext(CounterContext); //Usando por componente
  const { counter } = useCounterContext(); //Usando por hook

  // 5 - Context mais complexo
  const { color } = useTitleColorContext();

  console.log(color);

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*3 - Alterando valor do context*/}
      <ChangeCounter />
    </div>
  );
};

export default Home;

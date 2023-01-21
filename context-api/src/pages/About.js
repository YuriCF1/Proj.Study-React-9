import React from "react";

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();
  
  return (
    <div>
      <h1 style={{ color: color }}>Mudando de novo</h1>
      <p>Valor do contador: {counter}</p>
      <p>Sobre o Produto</p>
    </div>
  );
};

export default About;

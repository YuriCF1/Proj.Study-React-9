import React from "react";

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  // const { counter } = useContext(CounterContext);

  const {counter} = useCounterContext()
  return (
    <div>
      <h1>Mudando de novo</h1>
      <p>Valor do contador: {counter}</p>
      <p>Sobre o Produto</p>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import classes  from './Counter.module.scss'
type Props = {};

export const Counter = ({}: Props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return(
    <div className={classes.btn} >
        <h1>{count}</h1>
        <button onClick={increment}>increment++</button>
    </div>
  ) 
};

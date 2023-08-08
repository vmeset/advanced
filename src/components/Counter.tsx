import { useState } from "react";
import classes from "./Style.module.scss";

export default function Counter() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h1>Counter: {val}</h1>
      <button onClick={() => setVal(val + 1)} className={classes.green}>
        increase
      </button>
    </div>
  );
}

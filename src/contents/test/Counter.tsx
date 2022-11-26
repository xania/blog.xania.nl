import React, { useState, useEffect, useRef } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, delay);

  return (
    <div>
      <div>{count}</div>
      <input
        className="text-[#555]"
        defaultValue={delay}
        onChange={(e: any) => setDelay(e.target.value)}
      />
    </div>
  );
}

export default function () {
  return (
    <p>
      <Counter />
    </p>
  );
}

function useInterval<T extends Function>(callback: T, delay: number) {
  const savedCallback = useRef<T>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

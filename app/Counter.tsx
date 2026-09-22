//To jest wgl osobny komponent
"use client";

import { useState } from "react"

//Propsy czyli taki jakby constructor z javy
type CounterProps = {
  start: number;
  onChange: (newCount: number) => void;
};

export default function Counter({ start, onChange }: CounterProps) {
    const [count, setCount] = useState(start)

    function increment() {
        const newCount = count + 1

        setCount(newCount)
        onChange(newCount)
    }

    function decrement() {
        const newCount = count + 1

        setCount(newCount)
        onChange(newCount)
    }

    function reset() {
        setCount(start)
        onChange(start)
    }

    return (
        <div>
            <p>Licznik: {count}</p>

            <button onClick={decrement}>[-]</button>
            <button onClick={increment}>[+]</button>
            <button onClick={reset}>[Reset]</button>

            {/*Warunkowe renderowanie*/}
            {count > 10 && (
                <p>Wow ale jesteś sigmą</p>
            )}
        </div>
    )
}
"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`,
    );

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a}${SYMBOLS[data.operation]}${data.b}=${data.result}`);
  };
  return (
    <div id="wd-lab5-next-calculator" className="p-2">
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="a-input" className="mr-2">
        A:
      </label>
      <input
        type="number"
        placeholder="A"
        id="a-input"
        className="mb-2 me-2 rounded border border-neutral-300 px-2 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br />
      <label htmlFor="b-input" className="mr-2">
        B:{" "}
      </label>
      <input
        type="number"
        id="b-input"
        className="mb-2 me-2 rounded border border-neutral-300 px-2 py-1.5"
        placeholder="B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <label htmlFor="operation-select" className="mr-2">
        Operation
      </label>
      <select
        id="operation-select"
        className="mb-2 me-2 rounded border border-neutral-300 px-2 py-1.5"
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">x</option>
        <option value="divide">÷</option>
      </select>
      <br />
      <button
        type="button"
        className="me-2 rounded bg-blue-600 px-4 py-1.5 text-white disabled:opacity-50"
        disabled={a === "" || b === ""}
        onClick={() => calculate(operation)}
      >
        Calculate
      </button>
      <br />

      {result && (
        <input
          id="wd-calculator-result"
          readOnly
          className="mt-2 rouned border border-neutral-300 px-2 py-1"
          value={result}
        />
      )}

      {error && (
        <p id="wd-calculator-error" className="mt-2 text-red-600">
          {error}
        </p>
      )}
      <hr />
    </div>
  );
}
